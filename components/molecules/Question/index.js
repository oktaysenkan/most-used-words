import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Word from '../../atoms/Texts/Word'
import Screen from '../../../src/utils/Screen'

export class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Word value="Accident"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Screen.height * 0.20,
  }
});

export default Question