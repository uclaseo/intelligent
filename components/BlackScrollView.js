import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 10 : 35,
    backgroundColor: Colors.black,
    color: 'yellow',
  },
});

export default function LoggingScreen(props) {
  return (
    <ScrollView style={styles.container}>
      {props.children}
    </ScrollView>
  );
}

LoggingScreen.navigationOptions = {
  header: null,
};
