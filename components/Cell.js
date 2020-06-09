import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Cell = props => {
  return (
    <View style={{ ...styles.cell, ...props.style }}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.textBox}>
        <Text style={styles.text}>{props.data}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cell: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 23,
    padding: 10,
    marginEnd: 20,
  },
  textBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    width: 200,
    alignItems: 'flex-end'
  }
})

export default Cell;