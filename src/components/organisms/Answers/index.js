import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AnswerButton from 'components/atoms/Buttons/AnswerButton';

export class Answers extends Component {
  render() {
    let { answers, correctAnswer, onPress, showResult } = this.props;
    const choices = ['a', 'b', 'c', 'd',];
    return (
      <View style={styles.container}>
        { answers.map((answer, i) => {
            return <View key={i} style={styles.answerButton}>
              <AnswerButton
                choice={choices[i]}
                value={answer}
                onPress={onPress}
                isCorrect={(answer === correctAnswer)}
                showResult={showResult}
              />
            </View>
          }) }
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
