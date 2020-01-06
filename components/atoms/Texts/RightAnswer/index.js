import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../../src/config/Fonts';

export class RightAnswer extends Component {
  render() {
    const {value} = this.props;
    return (
      <Text style={styles.rightAnswer}>{value} </Text>
    )
  }
}

const styles = StyleSheet.create({
  rightAnswer: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: Fonts.ProductSansBold
  }
});

export default RightAnswer
