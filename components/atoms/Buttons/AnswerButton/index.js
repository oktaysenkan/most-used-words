import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import AnswerText from '../../Texts/AnswerText'
import AnswerChoice from '../../Texts/AnswerChoice'

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export class AnswerButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      scaleAnim: new Animated.Value(1),
    }
  }

  onPress = (answer) => {
    const { onPress } = this.props;
    this.setState({ clicked: true });
    Animated.sequence([
      Animated.timing(this.state.scaleAnim, {
        toValue: 0.90,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(this.state.scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start(() => {
      this.setState({ clicked: false });
      onPress(answer);
    });
  }

  render() {
    const { value, choice, onPress, isCorrect, showResult } = this.props;
    let { clicked } = this.state;

    let backgroundColor = () => {
      if (clicked)
        return '#FFFFFF';
      if (showResult) 
        if (isCorrect) 
          return '#197d44';
      return 'rgba(255, 255, 255, 0.1)';
    };

    const animatedStyle = {
      transform: [{scale: this.state.scaleAnim}],
      backgroundColor: backgroundColor(),
      borderLeftColor: clicked ? '#0630bd' : 'white',
      borderLeftColor: clicked ? '#0630bd' : 'white',
    }

    return (
      <AnimatedButton style={{ ...styles.answerButton, ...animatedStyle }} onPress={this.onPress.bind(this, value)}>
        <AnswerChoice value={choice} color={clicked && 'reverse'} />
        <View style={styles.answerText}>
          <AnswerText value={value} color={clicked && 'reverse'} />
        </View>
      </AnimatedButton>
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
