import React from 'react';
import { ScrollView, Image, ImageBackground, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Images extends React.Component<{}, {}> {
  render() {
    return (
      <ImageBackground
        style={style.background}
        source={require('../../assets/images/retina_wood.png')}
      >
        <ScrollView>
          <Text>Network image</Text>
          <TouchableHighlight style={style.squareContainer}>
            <Image
              style={style.square}
              source={{ uri: 'https://avatars0.githubusercontent.com/u/1703219' }}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
          <TouchableHighlight style={style.roundContainer}>
            <Image
              style={style.round}
              source={{ uri: 'https://avatars0.githubusercontent.com/u/1703219' }}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
          <Text>Local image: stretch</Text>
          <TouchableHighlight style={style.squareContainer}>
            <Image
              style={style.square}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'stretch'}
            />
          </TouchableHighlight>
          <Text>Local image: contain</Text>
          <TouchableHighlight style={style.squareContainer}>
            <Image
              style={style.square}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
          <Text>Local image: cover</Text>
          <TouchableHighlight style={style.squareContainer}>
            <Image
              style={style.square}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'cover'}
            />
          </TouchableHighlight>
          <Text>Local image: stretch</Text>
          <TouchableHighlight style={style.roundContainer}>
            <Image
              style={style.round}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'stretch'}
            />
          </TouchableHighlight>
          <Text>Local image: contain</Text>
          <TouchableHighlight style={style.roundContainer}>
            <Image
              style={style.round}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
          <Text>Local image: cover</Text>
          <TouchableHighlight style={style.roundContainer}>
            <Image
              style={style.round}
              source={require('../../assets/images/avatar.png')}
              resizeMode={'cover'}
            />
          </TouchableHighlight>
          <Text></Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    // alignSelf: 'stretch',
  },
  squareContainer: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#073B4C',
    overflow: 'hidden',
  },
  square: {
    alignSelf: 'center',
    height: 148,
    width: 148,
  },
  roundContainer: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    borderColor: '#073B4C',
    overflow: 'hidden',
  },
  round: {
    height: 148,
    width: 148,
  }
})