import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Cell = props => {
  return (
    <View style={{ ...styles.cell, ...props.style }}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title} {props.tipAmount}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>${props.data}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cell: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 5
  },
  text: {
    fontSize: 23,
    padding: 10,
    marginEnd: 20,
  },
  textDollar: {
    fontSize: 23,
    marginEnd: 100
  },
  textBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    width: 135,
    alignItems: 'flex-end'
  }
})

export default Cell;