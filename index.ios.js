import React from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

export default function ReactNativeSample() {
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
