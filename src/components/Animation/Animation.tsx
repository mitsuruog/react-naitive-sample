import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';

export default class Animation extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <Text>Animation</Text>
        <TouchableOpacity>
          <Animated.Value style={style.box} />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#06D6A0',
    width: 50,
    height: 100,
  }
})