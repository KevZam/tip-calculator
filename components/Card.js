import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return <View style={{ ...styles.card, ...props.style }}></View>
}

const styles = StyleSheet.create({
  card: {
    // Shadow properties only work on IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Elevation only works on Android
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
})

export default Card;