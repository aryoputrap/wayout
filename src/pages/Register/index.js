/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from '../../components';
import styles from '../style';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    check_textInputEmail: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const textInputEmail = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputEmail: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.containerreg}>
      <StatusBar backgroundColor="#349FF6" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View  style={styles.action}>
              <Input
                name="user"
                label="Username"
                placeholder="Username"
                onChangeText={val => textInputChange(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
              </View>
          </View>
          <View  style={styles.action}>
              <Input
                name="mail"
                label="Email"
                placeholder="Your Email"
                onChangeText={val => textInputEmail(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
              </View>
          </View>
          <View  style={styles.action}>
              <Input
                name="phone-call"
                label="Phone"
                placeholder="Your Phone"
                onChangeText={val => textInputPhone(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
              </View>
          </View>
          <View  style={styles.action}>
              <Input
                name="watch"
                label="Activity / Profession"
                placeholder="Your Activity (Programmer, Student etc..)"
                onChangeText={val => textInputActivity (Programmer, Student)(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
              </View>
          </View>

          <View  style={styles.action}>
              <Input
                name="lock"
                label="Password"
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={val => handlePasswordChange(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                     {data.secureTextEntry ? (
                       <Feather name="eye-off" color="grey" size={20} />
                     ) : (
                       <Feather name="eye" color="grey" size={20} />
                     )}
                   </TouchableOpacity>
                  ) : null}
              </View>
          </View>
          <View  style={styles.action}>
              <Input
                name="lock"
                label="Confrim Password"
                placeholder="Confrim Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={val => handleConfirmPasswordChange(val)}
              />
              <View  style={styles.iconreg}>
                  {data.check_textInputChange ? (
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                     {data.secureTextEntry ? (
                       <Feather name="eye-off" color="grey" size={20} />
                     ) : (
                       <Feather name="eye" color="grey" size={20} />
                     )}
                   </TouchableOpacity>
                  ) : null}
              </View>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#349FF6',
                  backgroundColor: '#FFF',
                  borderWidth: 2,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#349FF6',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;