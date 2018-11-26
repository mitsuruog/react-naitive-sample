import React from 'react';
import { Router, Stack, Scene, SceneProps } from 'react-native-router-flux';

import Home from './src/components/Home/Home';
import HelloWorld from './src/components/HelloWorld/HelloWorld';
import FlexBox from './src/components/Flexbox/FlexBox';
import ListView from './src/components/ListView/ListView';
import ListViewDetail from './src/components/ListView/ListView.detail';
import Login from './src/components/Login/Login';
import Private from './src/components/Login/Private';
import Images from './src/components/Images/Images';
import Http from './src/components/Http/Http';
import Animation from './src/components/Animation/Animation';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="helloWorld" component={HelloWorld} title="HelloWorld" />
          <Scene key="flexbox" component={FlexBox} title="FlexBox" />
          <Scene key="listView" component={ListView} title="ListView" />
          <Scene key="listView_detail" component={ListViewDetail} />
          <Scene key="login" component={Login} title="Login" />
          <Scene key="private" component={Private} title="Private" />
          <Scene key="images" component={Images} title="Images" />
          <Scene key="http" component={Http} title="HTTP" />
          <Scene key="animation" component={Animation} title="Animation" />
        </Stack>
      </Router>
    );
  }
}