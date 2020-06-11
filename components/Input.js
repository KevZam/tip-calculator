import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const Input = props => {
  // this {...props} syntax spreads all the props you have and forwards them to the component. The style attribute 
  // will take precedence.
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={styles.input} placeholder={"$"}>
      </TextInput>
    </View>)

}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#eee'
  },
  input: {
    height: 50,
    borderRadius: 1,
    textAlign: 'center',
    width: 150,
    fontSize: 40,
    borderWidth: 1,
    borderColor: 'grey'
  }
})

export default Input;