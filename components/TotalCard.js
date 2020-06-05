import React, { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import Input from './Input';
import Card from './Card';
import { Button } from 'react-native-elements';
import Cell from './Cell'

const TotalCard = props => {
  const [tipAmount, setTipAmount] = useState(.15)
  const [tipInDollars, setTipInDollars] = useState((props.userTotal * tipAmount).toFixed(2))

  const handleButtonClick = (percentage) => {
    setTipAmount(percentage)
    setTipInDollars((percentage * props.userTotal).toFixed(2))
  }



  console.log(tipInDollars)
  let total = (parseFloat(props.userTotal) + parseFloat(tipInDollars)).toFixed(2)

  return (
    <View>
      <View style={styles.top}>
        <View style={styles.container}>
          <Cell title={"Bill Total"} data={props.userTotal}></Cell>
        </View>
        <Text style={styles.text}>Tip Percentage</Text>
        <View style={styles.container}>
          <Button style={styles.button} title={'10%'} onPress={() => handleButtonClick(.10)}></Button>
          <Button style={styles.button} title={'15%'} onPress={() => handleButtonClick(.15)}></Button>
          <Button style={styles.button} title={'18%'} onPress={() => handleButtonClick(.18)}></Button>
          <Button style={styles.button} title={'20%'} onPress={() => handleButtonClick(.20)}></Button>
        </View>
        <View style={styles.container}>
          <Cell title={"Tip"} data={tipInDollars}></Cell>
        </View>
      </View>
      <View style={styles.container}>
        <Cell title={"Total"} data={total}></Cell>
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  text: {
    fontSize: 25,
    padding: 10
  },

  button: {
    fontSize: 10,
    paddingLeft: 5
  },
  top: {
    borderBottomWidth: 1,
    borderColor: 'black'
  }

})

export default TotalCard;