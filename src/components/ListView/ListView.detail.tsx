import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ListViewDetailProps {
  item: {
    id: number;
    name: string;
  };
}

export default class ListViewDetail extends React.Component<ListViewDetailProps, {}> {

  render() {
    return (
      <View style={style.conteainer}>
        <Text style={style.text}>{this.props.item.name}</Text>
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
})