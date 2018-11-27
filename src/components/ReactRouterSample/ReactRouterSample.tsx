import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Scene, Tabs, Router, Actions as RouterActions } from 'react-native-router-flux';

const Aaa = () => {
  return <View><Text>aaaa</Text></View>;
}

export default class ReactRouterSample extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          style={style.item}
          onPress={() => RouterActions.drawer()}
        >
          <Text>Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => RouterActions.tabs()}
        >
          <Text>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => RouterActions.confirm()}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item}
          onPress={() => RouterActions.error()}
        >
          <Text>Error</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 8,
  }
});