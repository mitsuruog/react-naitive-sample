import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Actions as RouterActions } from 'react-native-router-flux';

export default class Confirm extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <Text>Are you sure?</Text>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => RouterActions.pop()}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => RouterActions.pop()}
          >
            <Text>Yes, I do</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderColor: '#118AB2',
    color: '#118AB2',
    borderRadius: 20,
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  }
});