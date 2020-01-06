import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import AnswerText from '../../Texts/AnswerText'

export class AnswerButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <AnswerText value='25'/>
      </TouchableOpacity>
    )
  }
}

export default AnswerButton
