import React from 'react';
import { Text } from 'react-native';
import { Router, Stack, Scene, Modal, Lightbox, Overlay } from 'react-native-router-flux';

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
import WebView from './src/components/WebVIew/WebView';
import Form from './src/components/Form/Form';
import ReactRouterSample from './src/components/ReactRouterSample/ReactRouterSample';
import Confirm from './src/components/ReactRouterSample/Confirm';
import Error from './src/components/ReactRouterSample/Error';
import DrawerMenu from './src/components/ReactRouterSample/DrawerMenu';

const TabIcon = (props: { title: string }) => {
  return <Text>{props.title}</Text>
};

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Overlay key="overlay">
          <Modal
            key="modal"
            hideNavBar={true}
          >
            <Lightbox key="lightbox">
              <Stack key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="helloWorld" component={HelloWorld} title="HelloWorld" />
                <Scene key="flexbox" component={FlexBox} title="FlexBox" />
                <Scene key="listView" component={ListView} title="ListView" />
                <Scene key="listView_detail" component={ListViewDetail} />
                <Scene key="form" component={Form} title="Form" />
                <Scene key="login" component={Login} title="Login" />
                <Scene key="private" component={Private} title="Private" />
                <Scene key="images" component={Images} title="Images" />
                <Scene key="http" component={Http} title="HTTP" />
                <Scene key="animation" component={Animation} title="Animation" />
                <Scene key="webView" component={WebView} title="WebView" />
                <Scene key="router" component={ReactRouterSample} title="Router sample" />
                <Scene
                  key="drawer"
                  drawer={true}
                  hideNavBar={true}
                  contentComponent={DrawerMenu}
                >
                  <Scene key="drawer1" component={HelloWorld} title="Drawer #1" />
                  <Scene key="drawer2" component={Login} title="Drawer #2" />
                  <Scene key="drawer3" component={Form} title="Drawer #3" />
                </Scene>
                <Scene
                  key="tabs"
                  tabs={true}
                  legacy={true}
                  backToInitial={true}
                  hideNavBar={true}
                  back={true}
                  backTitle={'Back'}
                  swipeEnabled={true}
                >
                  <Stack
                    title="Tab #1"
                    icon={TabIcon}
                  >
                    <Scene
                      key="tab1"
                      component={HelloWorld}
                    />
                  </Stack>
                  <Stack
                    title="Tab #2"
                    icon={TabIcon}
                  >
                    <Scene
                      key="tab2"
                      component={Login}
                    />
                  </Stack>
                  <Stack
                    title="Tab #3"
                    icon={TabIcon}
                  >
                    <Scene
                      key="tab3"
                      component={Form}
                    />
                  </Stack>
                </Scene>
              </Stack>
              <Scene key="confirm" component={Confirm} title="Confirm" />
            </Lightbox>
            <Scene key="error" component={Error} title="Error" />
          </Modal>
        </Overlay>
      </Router>
    );
  }
}