import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import Input from './Input';
import Card from './Card';
import { Button, ThemeProvider } from 'react-native-elements';
import Cell from './Cell'
import Slider from "react-native-slider";

const theme = {
  colors: {
    primary: '#393e46',
  }
}

const TotalCard = props => {
  const [tipAmount, setTipAmount] = useState(.15)
  const [tipInDollars, setTipInDollars] = useState((props.userTotal * tipAmount).toFixed(2))


  // useEffect(() => {
  //   console.log(tipAmount);
  //   setTipPercentage('(' + ((tipAmount * 100).toFixed(0)) + '%)')
  // }, [tipPercentage])

  const handleButtonClick = (percentage) => {
    setTipAmount(percentage)
    setTipInDollars((percentage * props.userTotal).toFixed(2))

  }

  const handleRoundUp = () => {
    let centDiff = (Math.ceil(total)) - total;
    setTipInDollars((parseFloat(tipInDollars) + centDiff).toFixed(2));
  }


  const handleRoundDown = () => {
    let centDiff = total - (Math.floor(total))
    setTipInDollars((parseFloat(tipInDollars) - centDiff).toFixed(2));
  }


  let total = (parseFloat(props.userTotal) + parseFloat(tipInDollars)).toFixed(2)
  let tipPercentage = '(' + ((tipAmount * 100).toFixed(0)) + '%)'

  return (
    <View>
      <View style={styles.top}>
        <View style={styles.container}>
          <Cell title={"Bill Total:"} data={props.userTotal}></Cell>
        </View>

        <View style={styles.container}>
          <ThemeProvider theme={theme}>
            <View style={styles.buttons}>
              <Text style={styles.text}>Tip %</Text>
              <Button style={styles.button} title={'10%'} onPress={() => handleButtonClick(.10)}></Button>
              <Button style={styles.button} title={'15%'} onPress={() => handleButtonClick(.15)}></Button>
              <Button style={styles.button} title={'18%'} onPress={() => handleButtonClick(.18)}></Button>
              <Button style={styles.button} title={'20%'} onPress={() => handleButtonClick(.20)}></Button>
            </View>
          </ThemeProvider>
        </View>
        <View style={styles.sliderContainer}>
          <Slider value={tipAmount} onValueChange={value => handleButtonClick(value)} minimumValue={.01} maximumValue={.30} step={.01}></Slider>
        </View>

        {/* <Cell tipAmount={tipPercentage} title={"Tip"} data={tipInDollars}></Cell> */}
        <Cell tipAmount={tipPercentage} title={"Tip"} data={tipInDollars}></Cell>


        <View style={styles.container}>
          <Cell title={"Total:"} data={total}></Cell>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.cellText}>Round Total</Text>
          <ThemeProvider theme={theme}>
            <Button style={styles.button} title={'Down'} onPress={() => handleRoundDown()}></Button>
            <Button style={styles.button} title={'Up'} onPress={() => handleRoundUp()}></Button>
          </ThemeProvider>
        </View>

      </View >
    </View>

  )

}

const styles = StyleSheet.create({
  topElement: {
    backgroundColor: 'black'
  },
  container: {
    flexDirection: 'row',
    // padding: 10,
    // borderColor: 'black',
    // borderBottomWidth: 1,
    marginVertical: 5,
    paddingVertical: 15
  },
  buttons: {
    flexDirection: 'row',
    width: 310,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,

  },
  button: {
    fontSize: 10,
    paddingLeft: 10

  },
  top: {
    padding: 20
  },
  sliderContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  cellText: {
    fontSize: 23,
    padding: 10,
    marginStart: -20,
    marginEnd: 50,
  },

})

export default TotalCard;