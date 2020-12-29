import { StyleSheet } from 'react-native';
import { sin } from 'react-native-reanimated';

const CommonStyles = StyleSheet.create({
  appRedColor: {
    color: '#FF0000',
  },
  circle: {

    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'white'
  },
  commonGreen:{
    backgroundColor:'rgb(0, 177, 127)'
  },
  
  commonGreenText:{
    color:'rgb(0, 177, 127)'
  },
 commonGrayText:{
   color:'gray'
  //  color:'rgba(67, 66, 66)'
 },
  black: {
    color: '#000',
  },
  container: {
    flex: 1,
  },
  bgColor: {
    backgroundColor: '#fff',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarHeight: {
    // height: 60,
  },
  commonOrange: {
    backgroundColor: 'rgb(243, 98, 34)'
  },
  linearGradientBottomToTop: {
    position: 'absolute',
    top: '31.25%',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    opacity: 0.7,
  },
  fitToParent: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
    flex: 1,
  },
  fitToDevice: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fitToBottom: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  crossIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    opacity: 0.8,
  },
  leftCrossIcon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginLeft: 3,
    marginRight: 3,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  linearGradient: {
    position: 'absolute',
    top: '31.25%',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    opacity: 0.7,
  },
  centerText: {
    textAlign: 'center',
  },
  centerElement: {
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 3,
  },
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 0.5,
  },
  buttonCenterText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  margin: {
    margin: 10,
  },
  padding: {
    padding: 10,
  },
  buttonStyle: {
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 25,
  },
  textColorWhite: {
    color: 'white',
  },
  textColorYellow: {
    color: '#ffde26',
  },
  pb10: {
    paddingBottom: 10,
  },
  padding: {
    padding: 10,
  },
  stretch: {
    resizeMode: 'stretch',
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  ml10: {
    marginLeft: 20,
  },
  mll10: {
    marginLeft: 10,
  },
  mr10: {
    marginRight: 20,
  },
  mt10: {
    marginTop: 20,
  },

  mt30: {
    marginTop: 30,
  },
  m10: {
    marginTop: 20,
  },
  mtt10: {
    marginTop: 10,
  },
  textSizeLarge: {
    fontSize: 22,
  },
  textSizeIcon: {
    fontSize: 26,
  },
  textSizeNormal: {
    fontSize: 16,
  },
  textSizeAverage: {
    fontSize: 14,
  },
  loginItemStyle: {
    // borderColor: '#C5D4E8',
    borderColor: 'rgb(205, 211, 219)',
    alignSelf: 'center',
    borderRadius: 6,
    borderWidth: 1,
    shadowColor: '#8BB3E9',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },


  itemStyle: {
    marginTop: 10,
    alignSelf: 'center',
    // width: '88%',
    borderColor: '#707070',
  },
  textSizeMedium: {
    fontSize: 18,
  },
  textSizeSmall: {
    fontSize: 12,
  },
  fontMedium: {
    fontFamily: 'DINPro-Medium',
  },
  fontRegular: {
    fontFamily: 'DINPro-Regular',
  },
  fontBold: {
    fontFamily: 'DINPro-Bold',
  },
  br5: {
    borderRadius: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    opacity: 0.5,
  },
  loaderIndicatorStyle: {
    color: '#297dec',
  },
  backButtonStyle: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  headingTextStyle: {
    paddingLeft: 15,
    marginTop: 65,
  },
  itemStyle: {
    justifyContent: 'space-between',
    width: '88%',
    alignSelf: 'center',
    marginTop: 10,
  },
  itemStyle2: {
    justifyContent: 'space-between',
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    // marginTop: 10,
  },
  imageStyle: {
    width: 30,
    height: 20,
  },
  textGreen: {
    color: 'rgb(94, 165, 63)',
  },
  darkGray: {
    backgroundColor: 'rgb(247, 250, 254)',
  },
  textGray: {
    color: 'rgb(205, 211, 219)',
  },
  commonOrangeText: {
    color: 'rgb(243, 98, 34)',
  },
  active: {
    color: 'rgb(243, 98, 34)',

    fontFamily: 'DINPro-Bold',
    fontSize: 13,
  },
  Inactive: {
    fontFamily: 'DINPro-Bold',
    fontSize: 13,
    color: 'rgb(201, 201, 201)'
  },
  activeTab: {
    height: 2, backgroundColor: 'rgb(243, 98, 34)', marginTop: 10, width: '100%'
  },
  commonHeading: {
    color: 'rgb(51, 51, 51)',
    fontFamily: 'DINPro-Bold',
    fontSize: 22,

  },
  textBlue: {
    color: 'rgb(41, 125, 236)',
  },
  transparent: {
    color: 'transparent',
  },
  commonBlue: {
    backgroundColor: '#006fbd',
  },
  commonBlueText: {
    color: '#006fbd',
  },
  btnGreen: {
    backgroundColor: 'rgb(94, 165, 63)',
  },
  btnblue: {
    backgroundColor: 'blue',
  },
  dullBlue: {
    color: 'rgb(194, 221, 237)',
  },

  blue2: {
    color: 'rgb(28, 117, 173)',
  },

  gray: {
    // color:'rgb(51, 51, 51)'
    color: 'rgb(112, 112, 112)',
  },
  gray2: {
    color: 'rgb(51, 51, 51)',
    // color:'rgb(112, 112, 112)'
  },
  cardTextGray: {
    color: 'rgb(102, 102, 96)',
  },
  transparentBtn: {
    backgroundColor: 'transparent',
    borderColor: 'rgb(200, 200, 200)',
    borderWidth: 1,
    borderRadius: 2,
  },
  textHead: {
    fontFamily: 'DINPro-Regular',
    fontSize: 12,
    color: '#333333',
  },
  textDescription: {
    fontFamily: 'DINPro-Medium',
    fontSize: 14,
    color: '#333333',
  },
  commonCard: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default CommonStyles;
