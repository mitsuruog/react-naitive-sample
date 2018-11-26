import React from 'react';
import { View, WebView as ReactNaitiveWebView, StyleSheet, Alert } from 'react-native';

// TODO アプリ側のcookieを引き継げるかどうか？

export default class WebView extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.container}>
        <ReactNaitiveWebView
          source={{ uri: 'https://www.google.com/' }}
          onLoadEnd={() => Alert.alert('Page load ended')}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  }
});