import React from 'react';
import {Text,ScrollView, StyleSheet, View} from 'react-native';
// import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import style from '../style';
// import {Fire} from '../../config';

const Home = () => {
//   useEffect(() => {
//     const unsubscribe = Fire.auth().onAuthStateChanged(user => {
//       setTimeout(() => {
//         if (user) {
//           navigation.replace('MainApp');
//         } else {
//           navigation.replace('GetStarted');
//         }
//       }, 3000);
//     });

//     return () => unsubscribe();
//   }, [navigation]);

  return (
    <View style={style.page}>
       <View style={style.content}>
         <ScrollView showsVerticalScrollIndicator={false}>
          <Text >Home</Text>
         </ScrollView>
       </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.greypage,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
