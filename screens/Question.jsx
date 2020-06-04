import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const StartGameScreen = props => {
  return (
    <View>
      <Text>This is the Question page</Text>
      <Button title="Previous" onPress={props.prevPage} />
    </View>

  )
}

const styles = StyleSheet.create({

})

export default StartGameScreen;