import React from 'react';
import {Image, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import style from '../style';
// import {IconDoctor} from '../../assets';
// import {colors, fonts} from '../../utils';
import styles from '../style';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const {width, height} = Dimensions.get('window');
const Profile = ({name, desc, isRemove, photo, onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.borderProfile}>
          <Image source={require('../../assets/user.png')} style={styles.avatar} />
        </View>
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>Aryo Putra purwanto</Text>
          <Text style={styles.profession}>Software Engginering</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
