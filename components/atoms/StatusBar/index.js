import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class StatusBar extends Component {
  render() {
    let {value} = this.props
    if (!value) {
      value = 0;
    }
    return (
      <View>
        <View style={{...styles.statusBar, width: `${value}%` }}/>
        <View style={styles.border}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    marginTop: 5,
    height: 3,
    backgroundColor: 'white',
  },
  border: {
    height: 1,
    backgroundColor: 'white',
  }
});

export default StatusBar
