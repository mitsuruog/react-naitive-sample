import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';

interface AnimationState {
  scaleAnimation: Animated.Value;
  fadeAnimation: Animated.Value;
  moveAnimation: Animated.ValueXY;
}

export default class Animation extends React.Component<{}, AnimationState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scaleAnimation: new Animated.Value(1),
      fadeAnimation: new Animated.Value(1),
      moveAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
    };
    this.animation = this.animation.bind(this);
  }
  render() {
    const animationStyle = {
      opacity: this.state.fadeAnimation,
      transform: [
        { scale: this.state.scaleAnimation },
        { translateY: this.state.moveAnimation.y },
        { translateX: this.state.moveAnimation.x },
      ],
    };
    return (
      <View style={style.container}>
        <Animated.View
          style={[style.box, animationStyle]}
        >
          <Text>Box</Text>
        </Animated.View>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('scaleUp')}>
            <Text>ScaleUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('scaleDown')}>
            <Text>ScaleDown</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('fadeOut')}>
            <Text>FadeOut</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('fadeIn')}>
            <Text>FadeIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('moveUp')}>
            <Text>MoveUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('moveDown')}>
            <Text>MoveDown</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.menu} onPress={() => this.animation('sequence')}>
            <Text>Sequence</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  private animation(type: string) {
    switch (type) {
      case 'scaleUp':
        Animated.timing(
          this.state.scaleAnimation,
          {
            toValue: 3,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'scaleDown':
        Animated.timing(
          this.state.scaleAnimation,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'fadeIn':
        Animated.timing(
          this.state.fadeAnimation,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'fadeOut':
        Animated.timing(
          this.state.fadeAnimation,
          {
            toValue: 0.1,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'moveUp':
        Animated.timing(
          this.state.moveAnimation,
          {
            toValue: { x: 0, y: -75 },
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'moveDown':
        Animated.timing(
          this.state.moveAnimation,
          {
            toValue: { x: 0, y: 75 },
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
        break;
      case 'sequence':
        Animated.sequence([
          Animated.timing(
            this.state.moveAnimation,
            {
              toValue: { x: 50, y: 50 },
              duration: 1000,
              useNativeDriver: true,
            }
          ),
          Animated.parallel([
            Animated.timing(
              this.state.fadeAnimation,
              {
                toValue: 0.5,
                duration: 500,
                useNativeDriver: true,
              },
            ),
            Animated.timing(
              this.state.scaleAnimation,
              {
                toValue: 4,
                duration: 3000,
                useNativeDriver: true,
              }
            )
          ]),
          // 次のframeは手前のframeが終わってから開始される
          Animated.timing(
            this.state.moveAnimation,
            {
              toValue: { x: -50, y: -50 },
              duration: 1000,
              useNativeDriver: true,
            }
          ),
        ]).start();
        break;
      default:
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#06D6A0',
    width: 50,
    height: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menu: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  }
})