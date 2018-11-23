import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from './src/components/Home/Home';
import HelloWorld from './src/components/HelloWorld/HelloWorld';
import FlexBox from './src/components/Flexbox/FlexBox';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="helloWorld" component={HelloWorld} title="HelloWorld" />
          <Scene key="flexbox" component={FlexBox} title="FlexBox" />
        </Stack>
      </Router>
    );
  }
}