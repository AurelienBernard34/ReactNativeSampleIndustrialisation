import React from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://2d9b067dd9c1453f8c5a9e0883901b33:58d3eb5287054a4d9b84b25c13cb5b51@sentry.io/192725").install();


export default function ReactNativeSample() {
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
