import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../../src/config/Fonts';

export class AnswerText extends Component {
  render() {
    const {value} = this.props;
    return (
      <Text style={styles.answerText}>{value}</Text>
    )
  }
}

const styles = StyleSheet.create({
  answerText: {
    fontFamily: Fonts.ProductSansMedium,
    fontSize: 12,
    color: 'white',
  }
});

export default AnswerText
