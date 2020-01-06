import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../../src/config/Fonts';

export class Word extends Component {
  render() {
    const { value } = this.props
    return (
      <Text style={styles.word}>{value}</Text>
    )
  }
}

const styles = StyleSheet.create({
  word: {
    color: 'white',
    fontFamily: Fonts.ProductSansRegular,
    fontSize: 34
  },
});

export default Word
