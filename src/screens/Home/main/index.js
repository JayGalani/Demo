import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import style from './styles';
import {hp} from '../../../helpers/constants';
import {colors} from '../../../helpers/utils';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [showWholeData, setShowWholeData] = useState(true);
  const [isLoading, setIsLoding] = useState(false);

  const getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setData(json);
  };

  useEffect(() => {
    if (showWholeData) {
      getData();
    }
  }, [showWholeData]);

  const onItemPress = useCallback(async item => {
    setShowWholeData(false);
    setIsLoding(true);
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${item?.id}`,
    );
    let data = await response?.json();
    if (Object.keys(data)?.length > 0) setIsLoding(false);
    setData([data]);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={colors.primaryBlack} />
        </View>
      ) : (
        <>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <Item key={index} onItemPress={onItemPress} item={item} />
            )}
            ItemSeparatorComponent={() => <View style={{height: hp(2)}} />}
            ListHeaderComponent={() => <View style={{height: hp(2)}} />}
            ListFooterComponent={() => <View style={{height: hp(2)}} />}
          />
          {!showWholeData && (
            <TouchableOpacity
              onPress={() => setShowWholeData(true)}
              activeOpacity={0.7}
              style={style.buttonStyle}>
              <Text style={style.buttonTextStyle}>{'Show whole data'}</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;

const Item = ({item = {}, onItemPress = () => {}}) => {
  const title = useMemo(() => {
    const start = new Date().getTime();
    const details = displayTitle(item);
    const end = new Date().getTime();
    console.log(`Time taken by ${item?.id}`, end - start, 'ms');
    return details;
  }, [item]);

  useEffect(() => {
    console.log('Child Component called');
  }, [item]);

  return (
    <TouchableOpacity
      style={style.itemViewStyle}
      onPress={() => onItemPress(item)}
      activeOpacity={0.5}>
      <Text style={style.itemTitleTextStyle}>{item?.id}</Text>
      <Text style={style.itemSubTitleViewStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const displayTitle = item => {
  let result = item.title;
  return result;
};
