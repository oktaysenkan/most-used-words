import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import RightAnswer from './components/atoms/Texts/RightAnswer';
import TotalAnswer from './components/atoms/Texts/TotalAnswer';
import AppHeader from './components/molecules/AppHeader';
import Word from './components/atoms/Texts/Word';
import AppContent from './components/molecules/AppContent';
import Screen from './src/utils/Screen'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader/>
        <AppContent />
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
