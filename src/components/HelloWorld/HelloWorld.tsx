import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloWorld extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <Text>HelloWorld!!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
});