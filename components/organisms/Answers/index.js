import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AnswerButton from '../../atoms/Buttons/AnswerButton';

export class Answers extends Component {
  render() {
    return (
      <View>
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
  answerButton: {
    marginBottom: 10
  }
});

export default Answers
