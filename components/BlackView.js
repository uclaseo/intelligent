import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
} from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 10 : 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.black,
    color: 'yellow',
  },
});

export default function LoggingScreen(props) {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      {props.children}
    </View>
  );
}

LoggingScreen.navigationOptions = {
  header: null,
};
