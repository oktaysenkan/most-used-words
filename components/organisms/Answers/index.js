import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AnswerButton from '../../atoms/Buttons/AnswerButton';

export class Answers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.answerButton}>
          <AnswerButton />
        </View>
        <View style={styles.answerButton}>
          <AnswerButton />
        </View>
        <View style={styles.answerButton}>
          <AnswerButton />
        </View>
        <View style={styles.answerButton}>
          <AnswerButton />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  answerButton: {
    marginBottom: 10
  }
});

export default Answers
