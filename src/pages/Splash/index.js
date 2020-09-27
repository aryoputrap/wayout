import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
// import {ILLogo} from '../../assets';
// import {colors, fonts} from '../../utils';
// import {Fire} from '../../config';

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(() => navigation.navigate('Home'), 3000);
  // });

  return (
    <View style={styles.page} >
      <Image style={styles.stretch} source={require('../../assets/logo.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  stretch: {
    resizeMode: 'stretch',
    width: "100%",
    height: "80%",
  },
  page: {
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontFamily: fonts.primary[600],
  //   color: colors.text.primary,
  //   marginTop: 20,
  // },
});
