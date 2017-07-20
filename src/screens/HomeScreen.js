import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Config from 'react-native-config';
import { Sentry, SentrySeverity } from 'react-native-sentry';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

export const HOME_SCENE_NAME = 'HOME_SCENE';
export const URL_API = Config.API_URL;


Sentry.config('https://2d9b067dd9c1453f8c5a9e0883901b33:58d3eb5287054a4d9b84b25c13cb5b51@sentry.io/192725').install();

Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

Sentry.setUserContext({
  email: 'aurelienbernard34@gmail.com',
  userID: '144547',
  username: 'Jwah',
  extra: {
    isAdmin: false,
  },
});

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  navigateToGreetings() {
    Sentry.captureMessage('NavigateToGreetings', {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('NavigateToJsx', {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage('NavigateToState', {
      level: SentrySeverity.Info,
    });
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              Sentry.nativeCrash();
            }}
            title="Native Crash"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              throw new Error();
            }}
            title="Throw error"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              Alert.alert('Alerte declanché', 'Alerte Jenkins !',
                { cancelable: false });
            }}
            title="Alert"
          />
        </View>
        <View style={styles.margin}>
          <Text>{Config.ENV}</Text>
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.defaultProps = {
  navigation: '',
};

HomeScreen.propTypes = {
  navigation: PropTypes.Any,
};
