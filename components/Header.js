import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 36
  },
  headerTitle: {
    color: 'white',
    fontSize: 35
  }
})

export default Header;