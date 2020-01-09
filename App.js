import React, { Component } from 'react';
import { StyleSheet, View, Animated, StatusBar} from 'react-native';
import Screen from './src/utils/Screen'
import Scoreboard from './components/molecules/Scoreboard';
import Question from './components/molecules/Question';
import Answers from './components/organisms/Answers';
import MostUsed1000Word from './src/words/MostUsed1000Word';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      word: {},
      answers: [],
      score: {
        totalAnswersCount: 0,
        correctAnswersCount: 0,
      },
      isAnswerRight: null,
      showResult: false,
      transformAnim: new Animated.Value(0),
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount = () => {
    this.openingAnimation();
    this.getNewWord();
  }

  openingAnimation = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true
    }).start();
  }

  OnPressAnimation = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true
    }).start(() => {
      this.getNewWord();
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }).start();
    })

    Animated.sequence([
      Animated.timing(this.state.transformAnim, {
        toValue: -100,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.transformAnim, {
        toValue: 100,
        duration: 0,
        useNativeDriver: true
      }),
      Animated.timing(this.state.transformAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true
      })
    ]).start();
  }

  getNewWord = () => {
    const newWord = MostUsed1000Word.getRandomWord();
    this.setState({
      word: newWord,
      showResult: false,
    });
    const answers = [
      newWord.Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
    ]
    answers.sort((a, b) => (0.5 - Math.random()));
    this.setState({answers});
  }

  answerOnPress = (answer) => {
    const {word, score} = this.state;
    const isAnswerRight = (word.Turkish === answer);
    this.OnPressAnimation();
    this.setState({
      score: {
        totalAnswersCount: score.totalAnswersCount + 1,
        correctAnswersCount: (isAnswerRight) ? score.correctAnswersCount + 1 : score.correctAnswersCount,
      },
      isAnswerRight,
      showResult: true,
    });
  }

  render() {
    const {word, answers, score, isAnswerRight, showResult} = this.state;
    const containerStyle = {
      ...styles.container,
      backgroundColor: (isAnswerRight === true) ? '#219653' : (isAnswerRight === false) ? '#DE3535' : '#1544E3'
    }
    const animatedStyle = {
      flex: 1,
      opacity: this.state.fadeAnim,
      transform: [{translateX: this.state.transformAnim}],
    }
    return (
      <View style={containerStyle}>
        <StatusBar translucent backgroundColor='transparent' />
          <Scoreboard score={score}/>
          <Animated.View style={animatedStyle}>
            <Question word={word.English}/>
            <Answers answers={answers} correctAnswer={word.Turkish} onPress={this.answerOnPress} showResult={showResult}/>
          </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: Screen.height,
    width: Screen.width,
  },
});

export default App;
