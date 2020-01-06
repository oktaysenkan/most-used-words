import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import RightAnswer from '../../atoms/Texts/RightAnswer'
import TotalAnswer from '../../atoms/Texts/TotalAnswer'
import StatusBar from '../../atoms/StatusBar'

export class AppHeader extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <RightAnswer value="02" />
          <TotalAnswer value="01" />
        </View>
        <View>
          <StatusBar value={25}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AppHeader
