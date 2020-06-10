import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import TotalCard from '../components/TotalCard';
import { Button, ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#222831',
  }
}

const StartGameScreen = props => {
  return (
    <View style={styles.background}>
      <TotalCard userTotal={props.userTotal}></TotalCard>
      <View style={styles.button}>
        <ThemeProvider theme={theme}>
          <Button title="Restart" onPress={props.prevPage} />
        </ThemeProvider>
      </View>

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
  },
  button: {
    marginTop: 10
  }
})

export default StartGameScreen;