import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Fonts } from 'configs/Fonts';

export class TotalAnswer extends Component {
  render() {
    const {value} = this.props;
    return (
      <Text style={styles.totalAnswer}>/ {value}</Text>
    )
  }
}

const styles = StyleSheet.create({
  totalAnswer: {
    color: '#ffffff',
    opacity: 0.5,
    fontSize: 12,
    fontFamily: Fonts.ProductSansRegular
  }
});

export default TotalAnswer
