import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  View,
} from 'react-native';

import BlackScrollView from '../components/BlackScrollView';
import Colors from '../constants/Colors';

export default class List extends Component {
  handleOnPressItem = (item) => {
    const { openModal } = this.props;
    openModal();
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableHighlight
        onPress={() => this.handleOnPressItem(item)}
        style={{
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
        underlayColor={Colors.white}
        activeOpacity={0.3}
      >
        <View
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: Colors.red,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: Colors.white,
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

List.propTypes = {
  openModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
