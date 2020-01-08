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
      fadeAnim: new Animated.Value(0),
      scaleAnim: new Animated.Value(1),
      backgroundColorAnim: new Animated.Value('rgba(255, 255, 255, 0.1)'),
    }
  }

  componentDidMount = () => {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 1, duration: 600, useNativeDriver: true },
    ).start();
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
    })
    onPress(answer);
  }

  render() {
    const { value, choice, onPress, isCorrect } = this.props;
    let { clicked } = this.state;

    const animatedStyle = {
      opacity: this.state.fadeAnim,
      transform: [{scale: this.state.scaleAnim}],
      backgroundColor: clicked ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
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
