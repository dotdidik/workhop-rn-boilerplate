import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNav from './src/components/view/navSet'

const Root = createStackNavigator({
  HomeScreen: {
    screen: TabNav,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),

  },

},
);

Root.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


const App = createAppContainer(Root)

export default App