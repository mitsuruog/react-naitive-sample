import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Actions as RouterActions } from 'react-native-router-flux';

interface ReactRouterSampleProps{
  navigation: NavigationScreenProp<any, any>;
}

export default class ReactRouterSample extends React.Component<ReactRouterSampleProps, {}> {
  componentWillMount() {
    this.props.navigation.setParams({
      'onRight': this.onRight,
    });
  }
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
  private onRight = () => {
    console.log('Press onRight!!');
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
