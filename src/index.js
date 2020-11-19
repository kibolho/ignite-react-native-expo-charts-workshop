import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';

const { Navigator, Screen } = createStackNavigator();

function Entry() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Entry;
