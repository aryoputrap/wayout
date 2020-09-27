import {StyleSheet, Dimensions, Platform,} from 'react-native';
// import {
// widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {colors, fonts} from '../utils';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white, 
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    color: colors.bluedeep,
  },
  iconreg: {
    justifyContent: 'center',
    // marginLeft: width * 0.7,
  },
  scroolview: {
    height: height,
    marginTop: 10,
    marginBottom: 52,
  },
  avatar: {
    width: 130,
    height: 130,
    paddingTop: 30,
    borderRadius: 130 / 2, 
    marginTop: height * 0.3
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    // borderWidth: 1,
    // borderColor: colors.border,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8
  },
  page: {
    backgroundColor: colors.greypage,
    flex: 1,
  },
  // nomorVA: {
  //   fontSize: 14,
  //   textAlign: 'center',
  //   fontFamily: 'Montserrat-Bold',
  // },
  //Register
  containerreg: {
    flex: 1,
    backgroundColor: colors.bluedeep,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 18,
    paddingLeft: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    paddingBottom: 7,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.bluedeep,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
