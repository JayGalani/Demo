import {StyleSheet} from 'react-native';

import {hp, statusBarHeight, wp} from '../../../helpers/constants';
import {colors, fontFamily} from '../../../helpers/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:hp(2),
  },
  itemViewStyle: {
    padding: hp(1),
    borderWidth: 1,
    borderColor: colors.shadowColor_0,
    marginHorizontal: wp(2.66),
    backgroundColor: colors.commonTextColor,
    borderRadius: wp(2.66),
    flexDirection: 'row',
  },
  itemTitleTextStyle: {
    marginHorizontal: wp(2.66),
    color: colors.primaryBlack,
    fontSize: wp(3.73),
    fontFamily: fontFamily.semiBold,
  },
  itemSubTitleViewStyle: {
    flex:1,
    marginRight: wp(2.66),
    color: colors.primaryBlack,
    lineHeight:hp(2),
    fontSize: wp(3),
    fontFamily: fontFamily.medium,
  },
  buttonStyle: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor:colors.shadowColor_0,
    marginVertical:hp(2),
    borderRadius:hp(2.33),
    width: wp(89.33),
    height: hp(7.14),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: wp(4.8),
    fontFamily: fontFamily.regular,
    color: colors.primaryBlack,
  },
});

export default style;
