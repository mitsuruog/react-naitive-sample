import React from 'react';
import { View, Button, StyleSheet, FlexStyle } from 'react-native';

interface FlexBoxState {
  flexConteiner: FlexStyle;
}

export default class FlexBox extends React.Component<{}, FlexBoxState> {
  constructor(props: {}) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  render() {
    return (
      <View style={style.constainer}>
        <View style={StyleSheet.flatten([style.flexConteiner, this.state.flexConteiner])}>
          <View style={style.box1} />
          <View style={style.box2} />
          <View style={style.box3} />
        </View>
        <View style={style.buttonContainer}>
          <Button
            title={"center"}
            onPress={() => this.onPress("center")}
          />
          <Button
            title={"flex-start"}
            onPress={() => this.onPress("flex-start")}
          />
          <Button
            title={"flex-end"}
            onPress={() => this.onPress("flex-end")}
          />
          <Button
            title={"space-between"}
            onPress={() => this.onPress("space-between")}
          />
        </View>
      </View>
    );
  }
  private onPress(justifyContent: FlexStyle['justifyContent']) {
    this.setState({ flexConteiner: { justifyContent } });
  }
}

const style = StyleSheet.create({
  constainer: {
    backgroundColor: '#073B4C',
    flexDirection: 'row',
    height: 600,
  },
  flexConteiner: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexShrink: 0,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#EF476F',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#FFD166',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: '#06D6A0',
  }
})