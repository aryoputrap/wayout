import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
// import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import {useTheme} from 'react-native-paper';
// import AsyncStorage from '@react-native-community/async-storage';
// import
// import Loading from '../components/Loading';
// import {AuthContext} from '../components/context';
import {colors} from '../../utils';
import styles from './styles';

// import Users from '../model/users';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    user: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    gcm:
      'crwEUeA1jJQ:APA91bHYV8HLP2HOn_bf0xh5vyhlUC_mCWOc8tk0YC5P9QZbGcGLZ-c9gNN83H551tAqOLPXvCTIlm0hm895_jO5MRm3wym20HnThqmquJ_M5jo-XPcP6HgjxmvNdcEaASGyca836z',
    notes: '',
    absence: '',
    latitude: '-6.462077',
    version: '1.0',
    longitude: '106.8065796',
    Loading: false,
  });

  // const {colors} = useTheme();


  // const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        user: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        user: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  // loginProcess() {
  //   this.setState({isLoading: true});
  // };


  return (
    <View style={styles.container_sign}>
      <StatusBar backgroundColor="#349FF6" barStyle="light-content" />
      {/* <View>
        <Image
          source={require('../../assets/logo-white.png')}
          // resizeMode={'stretch'}
          style={styles.fotoData_signup}
        />
      </View> */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Selamat Bekerja!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.white,
          },
        ]}
        
        >
        {/* <Loading flag={data.Loading} /> */}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
          >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Your user"
            placeholderTextColor="#666666"
            // style={[
            //   styles.textInput,
            //   {
            //     color: colors.text,
            //   },
            // ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <Text
          // style={[
          //   styles.text_footer,
          //   {
          //     color: colors.text,
          //     marginTop: 35,
          //   },
          // ]}
          >
          Password
        </Text>
        <View style={styles.action}>
          {/* <Feather name="lock" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            // style={[
            //   styles.textInput,
            //   {
            //     color: colors.text,
            //   },
            // ]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password minimal 6 karakter.</Text>
          </Animatable.View>
        )}
        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle();
            }}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              LOGIN
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                backgroundColor: '#fff',
                borderColor: '#F4A525',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#F4A525',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity> */}
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
