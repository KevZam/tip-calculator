import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import TotalCard from '../components/TotalCard';
import { Button, ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#00bcd4',
  }
}

const StartGameScreen = props => {
  return (
    <View style={styles.background}>
      <TotalCard userTotal={props.userTotal}></TotalCard>
      <ThemeProvider theme={theme}>
        <Button title="Previous" onPress={props.prevPage} />
      </ThemeProvider>
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