import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Actions as RouterActions } from 'react-native-router-flux';

export default class Error extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <View style={style.innerContainer}>
          <View style={style.close}>
            <TouchableOpacity onPress={() => RouterActions.pop()}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={style.contents}>
            <Text>Something goes wrong...</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    paddingTop: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});