import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Home,
  Profile,
  Register,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components';
import {colors} from '../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');
const MainApp = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'house'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'face-retouching-natural' : 'face';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.bluedeep,
          inactiveTintColor: colors.grey,
          style: styles.tabbar,
        }}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  ); 
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  icon: {
    color: colors.bluedeep,
  },
  tabbar:{
    height: height * 0.07,
    width: width * 0.8,
    // elevation: 50,
    bottom: height * 0.02,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.greypage,
  },
  // title: {
  //   fontSize: 20,
  //   fontFamily: fonts.primary[600],
  //   color: colors.text.primary,
  //   marginTop: 20,
  // },
});

