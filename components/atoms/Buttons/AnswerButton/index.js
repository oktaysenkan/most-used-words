import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AnswerText from '../../Texts/AnswerText'
import AnswerChoice from '../../Texts/AnswerChoice'

export class AnswerButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.answerButton}>
        <AnswerChoice value='a'/>
        <AnswerText value='Kaza'/>
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
  }
});

export default AnswerButton
