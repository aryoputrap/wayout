import {Dimensions, StyleSheet, Platform} from 'react-native';
import color from './color';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttonIcon: {
    justifyContent: 'space-between',
    marginRight: width * 0.15,
  },
  buttonLogin: {
    width: width * 0.8,
    height: height * 0.085,
    marginTop: 50,
    borderRadius: 12,
    backgroundColor: '#F4A525',
    flexDirection: 'row',
    justifyContent: 'center', // Membuat Text Tepat di Tengah
    alignItems: 'center', //Text Tengah Pada Buuton
  },
  buttonText: {
    // justifyContent: 'center',
    marginRight: width * 0.15,
    alignSelf: 'center',
    color: color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonView: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    width: width * 0.9,
    height: height,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: color.main.white,
  },
  containercekin: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: width * 0.12,
  },
  containerslip: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // padding: width * 0.12,
  },
  containerabsen: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.1,
  },
  containerButton: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  drawerContent: {
    flex: 1,
  },
  drawerTop: {
    flexDirection: 'row',
    width: width * 0.1,
    height: height * 0.1,
    marginTop: height * 0.025,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  editfoto: {
    width: width * 0.35,
    fontSize: 14,
    lineHeight: 14,
    borderWidth: 1,
    borderColor: color.main.redvaldo,
    borderRadius: 8,
  },
  editfototext: {
    margin: 5,
    textAlign: 'center',
  },
  fotoData: {
    width: width * 0.8,
    height: height * 0.12,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: height * 0.1,
    marginBottom: 50,
  },
  imageBottom: {
    width,
    height: height * 0.28,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 'auto',
    top: height * 0.25,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_slip: {
    marginTop: 20,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2.5,
    borderBottomColor: color.main.greyLine,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    left: 7,
  },
  bottomDrawerSection: {
    marginBottom: height * 0.01,
    left: 7,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  // sign up
  container_sign: {
    flex: 1,
    backgroundColor: '#349FF6',
  },
  header: {
    // flex: 1,
    height: height * 0.2,
    justifyContent: 'flex-end',
    // paddingHorizontal: 20,
    paddingBottom: 20,
    marginLeft: 30,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 40,
  },
  fotoAbsen: {
    marginRight: width * 0.05,
    width: width * 0.35,
    height: height * 0.18,
    borderRadius: 100,
  },
  fotoData_signup: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'stretch',
    alignSelf: 'center',
    // marginTop: height * 0.112,
  },
  textSelamat: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  textNama: {
    fontSize: 20,
    fontWeight: '900',
  },
  textAlamat: {
    fontSize: 15,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    bottom: 5,
  },
  text_cekin: {
    fontSize: 40,
    color: color.main.redvaldo,
    marginTop: height * 0.13,
  },
  text_jam: {
    fontSize: 50,
    color: color.main.redvaldo,
    marginTop: height * 0.05,
  },
  text_motiv: {
    fontSize: 16.5,
    marginTop: height * 0.08,
    // textAlign: 'center',
  },
  text_slip: {
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  signIn: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F4A525',
  },
  viewabsen: {
    flexDirection: 'column',
    marginTop: height * 0.025,
    width: width * 0.45,
    height: height * 0.15,
  },
  viewslip: {
    flexDirection: 'column',
    // alignItems: 'center',
    marginTop: height * 0.025,
    width: width * 0.88,
    height: height * 0.15,
  },
  viewslipbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.23,
    // marginRight: 5,
  },
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
