import React, { Component } from 'react';
import { StyleSheet, View, Animated} from 'react-native';
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
    console.log(newWord);
    this.setState({word: newWord});
    const answers = [
      newWord.Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
      MostUsed1000Word.getRandomWord().Turkish,
    ]
    answers.sort((a, b) => (0.5 - Math.random()));
    this.setState({answers});
  }

  answersOnPress = (answer) => {
    const {word, score} = this.state;
    this.OnPressAnimation();
    if (word.Turkish === answer) {
      this.setState({
        score: {
          ...score,
          correctAnswersCount: score.correctAnswersCount + 1,
          totalAnswersCount: score.totalAnswersCount + 1,
        }
      });
    } else {
      this.setState({
        score: {
          ...score,
          totalAnswersCount: score.totalAnswersCount + 1,
        }
      });
    }
  }

  render() {
    const {word, answers, score} = this.state;
    const animatedStyle = {
      flex: 1,
      opacity: this.state.fadeAnim,
      transform: [{translateX: this.state.transformAnim}],
    }
    return (
      <View style={styles.container}>
          <Scoreboard score={score}/>
          <Animated.View style={animatedStyle}>
            <Question word={word.English}/>
            <Answers answers={answers} correctAnswer={word.Turkish} onPress={this.answersOnPress}/>
          </Animated.View>
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
