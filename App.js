import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import Screen from './src/utils/Screen'
import Scoreboard from './components/molecules/Scoreboard';
import Question from './components/molecules/Question';
import Answers from './components/organisms/Answers';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Scoreboard/>
        <Question/>
        <Answers/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#1544E3',
    height: Screen.height,
    width: Screen.width,
  }
});

export default App;
