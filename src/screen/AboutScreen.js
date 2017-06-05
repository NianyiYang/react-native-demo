import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  blueFlexRect: {
    flex: 1,
    backgroundColor: 'blue',
  },
  greenFlexRect: {
    flex: 1,
    backgroundColor: 'green',
  },
  blackFlexRect: {
    flex: 1,
    backgroundColor: 'black',
  },
});

/**
 * FlexView
 */
class FlexView extends Component {

  render() {
    return (
      <View style={{ height: 100, width: 300 }}>
        <View style={styles.blueFlexRect} />
        <View style={styles.greenFlexRect} />
        <View style={styles.blackFlexRect} />
      </View>
    );
  }
}

class AboutScreen extends Component {

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
        <FlexView />
      </View>
    );
  }
}

export default AboutScreen;
