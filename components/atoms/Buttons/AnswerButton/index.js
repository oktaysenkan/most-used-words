import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AnswerText from '../../Texts/AnswerText'
import AnswerChoice from '../../Texts/AnswerChoice'

export class AnswerButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.answerButton}>
        <AnswerChoice value='a'/>
        <View style={styles.answerText}>
          <AnswerText value='Kaza'/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  answerButton: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: 'white',
  },
  answerText: {
    paddingLeft: 30,
  },
});

export default AnswerButton
