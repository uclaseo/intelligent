import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import TraineeScreen from './TraineeScreen';

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

export default class LoggingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  onPress = () => {
    this.setState({ isModalVisible: true });
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <BlackScrollView>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <Text style={{ color: Colors.blue }}>aaaaaa</Text>
        <Text style={{ color: Colors.yellow }}>aaaaaaa</Text>
        <Text style={{ color: Colors.red }}>aaaaaaa</Text>
        <Text style={{ color: Colors.green }}>aaaaaaa</Text>
        <Text style={{ color: Colors.pink }} onPress={this.onPress}>aaaaaaa</Text>
        {
          isModalVisible
            ? (
              <TraineeScreen
                animationType="slide"
                transparent={false}
                visible={isModalVisible}
                closeModal={this.closeModal}
              />
            )
            : null
        }
      </BlackScrollView>
    );
  }
}

LoggingScreen.navigationOptions = {
  header: null,
};
