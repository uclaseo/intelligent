import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';


import BlackScrollView from '../components/BlackScrollView';
import ListItem from './ListItem';

import Colors from '../constants/Colors';


export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
  }

  extractKey = item => item.id;

  renderItem = ({ item }) => {
    const { openModal } = this.props;
    return (
      <ListItem
        item={item}
        openModal={openModal}
      />
    );
  }

  render() {
    const { children } = this.props;
    return (
      <FlatList
        data={children}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
};

