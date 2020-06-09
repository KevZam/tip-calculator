import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import TotalCard from '../components/TotalCard';

const StartGameScreen = props => {
  return (
    <View style={styles.background}>
      <TotalCard userTotal={props.userTotal}></TotalCard>
      <Button title="Previous" onPress={props.prevPage} />

    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    zIndex: 2,
    width: '80%',
    height: 100
  },
  background: {
    backgroundColor: '#eee'
  }
})

export default StartGameScreen;