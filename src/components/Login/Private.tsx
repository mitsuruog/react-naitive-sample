import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Private extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.conteainer}>
        <Text style={style.text}>This is a private page!!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  conteainer: {
    backgroundColor: '#073B4C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  }
});