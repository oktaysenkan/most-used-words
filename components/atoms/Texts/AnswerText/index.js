import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../../src/config/Fonts';

export class AnswerText extends Component {
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
    fontFamily: Fonts.ProductSansMedium,
    fontSize: 12,
    color: 'white',
  },
  reverse: {
    fontFamily: Fonts.ProductSansMedium,
    fontSize: 12,
    color: '#1046FF',
  }
});

export default AnswerText
