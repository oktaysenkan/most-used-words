import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Word from 'components/atoms/Texts/Word'

export class Question extends Component {
  render() {
    let {word} = this.props
    return (
      <View style={styles.container}>
        <Word value={word}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Question
