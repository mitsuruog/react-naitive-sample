import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions as RouterActions } from 'react-native-router-flux';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.helloWorld()}
        >
          <Text>HelloWorld</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.flexbox()}
        >
          <Text>FlexBox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.listView()}
        >
          <Text>ListView</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.login()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.images()}
        >
          <Text>Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.http()}
        >
          <Text>HTTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.navLink}
          onPress={() => RouterActions.animation()}
        >
          <Text>Animation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  navLink: {
    padding: 10,
  }
});