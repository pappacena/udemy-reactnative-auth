import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, autoCorrect, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = {
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
