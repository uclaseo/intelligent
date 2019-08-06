import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';

export default function Circle(props) {
  const size = props.size ? props.size : 60;
  const style = props.style;
  const children = props.children;
  return (
    <View
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
        bottom: 20,
        right: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        ...style,
      }}
    >
      <Button
        buttonStyle={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: Colors.blue,
        }}
        containaerStyle={{
        }}
        titleStyle={{
          fontSize: 14,
          fontWeight: '500',
          color: Colors.white,
        }}
        type="outline"
        raised
        {...props}
        background={
        Platform.OS !== 'ios'
          ? TouchableNativeFeedback.Ripple(Colors.white, false)
          : undefined
        }
        icon={children}
      />
    </View>
  );
};
