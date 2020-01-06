import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../../src/config/Fonts';

export class AnswerChoice extends Component {
  render() {
    const {value} = this.props;
    return (
      <Text style={styles.answerChoice}>{value}</Text>
    )
  }
}

const styles = StyleSheet.create({
  answerChoice: {
    fontFamily: Fonts.ProductSansRegular,
    fontSize: 12,
    color: 'white',
    opacity: 0.65,
  }
});

export default AnswerChoice
