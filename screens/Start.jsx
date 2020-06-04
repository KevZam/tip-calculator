import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Input from '../components/Input';

const Start = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = enteredText => {
    setEnteredValue(enteredText)
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.questionText}>Enter your bill total:</Text>
        <View style={styles.inputContainer}>
          <Input onChangeText={numberInputHandler} value={enteredValue} blurOnSubmit keyboardType="numeric" />
          <View style={styles.buttonContainer}>
            <Button title="Next" onPress={() => props.submitTotal(enteredValue)}>
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 50,
  },
  questionText: {
    fontSize: 32,
    marginTop: 150
  },
  buttonContainer: {
    marginTop: 25,
  },
})

export default Start;


//TODO Change Button to custom Button Component