import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export class StatusBar extends Component {
  render() {
    let {value} = this.props
    const statusBarStyle = {
      ...styles.statusBar,
      width: (value) ? `${value}%` : 0
    }
    return (
      <View>
        <View style={statusBarStyle}/>
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
