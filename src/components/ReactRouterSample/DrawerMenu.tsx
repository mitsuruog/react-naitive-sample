import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DrawerMenu = () => {
  return (
    <View style={style.container}>
      <Text>DrawerMenu</Text>
      <TouchableOpacity
        style={style.item}
        onPress={() => Actions.drawer1()}
      >
        <Text>Hello World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => Actions.drawer2()}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => Actions.drawer3()}
      >
        <Text>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => Actions.router()}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingVertical: 8,
  }
});

export default DrawerMenu;