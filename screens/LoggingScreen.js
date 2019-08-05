import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import BlackScrollView from '../components/BlackScrollView';
import Colors from '../constants/Colors';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: Colors.black,
//     color: 'yellow',
//   },
// });

export default function LoggingScreen() {
  return (
    <BlackScrollView>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Text style={{color: 'yellow'}}>hello</Text>
    </BlackScrollView>
  );
}

LoggingScreen.navigationOptions = {
  header: null,
};

