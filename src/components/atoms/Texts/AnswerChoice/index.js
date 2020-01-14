import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from 'configs/Fonts';

export class AnswerChoice extends Component {
  render() {
    const {value, color} = this.props;
    const style = color ? styles[color] : styles.default;
    return (
      <Text style={style}>{value}</Text>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    fontFamily: Fonts.ProductSansRegular,
    fontSize: 12,
    color: 'white',
    opacity: 0.65,
  },
  reverse: {
    fontFamily: Fonts.ProductSansRegular,
    fontSize: 12,
    color: '#1046FF',
    opacity: 0.65,
  }
});

export default AnswerChoice
