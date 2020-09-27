import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
// 'MaterialIcons.ttf','FontAwesome.ttf', 'EvilIcons.ttf'

// const ROUTES = {
//   Home: {name: 'home', label: 'Home'},
//   Akun: {name: 'profile', label: 'Profile'},
// };


const Home = <Icon name="rocket" size={30}/>;

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? Home  : Home;
    } 
    if (title === 'Profile') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
