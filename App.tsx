import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppProps {};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
