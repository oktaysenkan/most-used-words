import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import RightAnswer from '../../atoms/Texts/RightAnswer'
import TotalAnswer from '../../atoms/Texts/TotalAnswer'
import StatusBar from '../../atoms/StatusBar'

export class Scoreboard extends Component {
  render() {
    const {score} = this.props;
    let value = 100 / (score.totalAnswersCount / score.correctAnswersCount);
    return (
      <View>
        <View style={styles.container}>
          <RightAnswer value={score.correctAnswersCount} />
          <TotalAnswer value={score.totalAnswersCount} />
        </View>
        <View>
          <StatusBar value={value}/>
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

export default Scoreboard
