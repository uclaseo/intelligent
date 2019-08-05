import React, { Fragment } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-navigation';

import BlackScrollView from '../components/BlackScrollView';
import Colors from '../constants/Colors';

export default class Trainee extends React.Component {

  onPress = () => {
    // this.props.navigation.navigate('Logging');
  }

  render() {
    const { closeModal } = this.props;
    return (
      <Fragment>
        <Modal
          {...this.props}
        >
          <SafeAreaView style={{ flex: 0, backgroundColor: Colors.black }} />
          <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
            <BlackScrollView>
              <Text style={{ color: 'yellow' }}>TRAINEE</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
              <Text style={{ color: 'yellow' }} onPress={closeModal}>GOBACK</Text>
            </BlackScrollView>
          </SafeAreaView>
        </Modal>
      </Fragment>

    );
  }
}
