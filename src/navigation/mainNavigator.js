import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  MainScreen,
} from '../screens';
import {screenString} from '../helpers/strings';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          orientation: 'portrait',
        }}
        initialRouteName={screenString.main}>
        <Stack.Screen name={screenString.main} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
