import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Platfor, Dimensions} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../../../utils';

const Input = ({label, onChangeText, secureTextEntry, name, placeholder}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.text_footer}>{label}</Text>
          <View style={styles.action}>
            <Feather name={name} color="#05375a" size={20} />
            <TextInput
              placeholder={placeholder}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
            />
          </View>
    </View>
  );
};

export default Input;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  action: {
    width: width * 0.85,
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    width: width * 0.7,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: colors.black,
    fontSize: 16.5,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 19,
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
