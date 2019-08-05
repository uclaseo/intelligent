import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import List from '../components/List';
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

const dummyTrainees = [
  {
    id: '1',
    name: 'inseok',
    phone: '(818)919-5883',
  },
  {
    id: '2',
    name: 'junseok',
    phone: '(818)919-5883',
  },
  {
    id: '3',
    name: 'alex',
    phone: '(818)919-5883',
  },
  {
    id: '4',
    name: 'eric',
    phone: '(818)919-5883',
  },
  {
    id: '5',
    name: 'dong',
    phone: '(818)919-5883',
  },
  {
    id: '6',
    name: 'chris',
    phone: '(818)919-5883',
  },
  {
    id: '7',
    name: 'james',
    phone: '(818)919-5883',
  },
  {
    id: '8',
    name: 'miguel',
    phone: '(818)919-5883',
  },
  {
    id: '9',
    name: 'jose',
    phone: '(818)919-5883',
  },
];

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
  },
});

export default class LoggingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  renderTrainees = () => {
    return (
      <List
        openModal={this.openModal}
      >
        {dummyTrainees}
      </List>
    );
  }

  openModal = () => {
    this.setState({ isModalVisible: true });
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <BlackScrollView>
        <ScrollView style={styles.listContainer}>
          { this.renderTrainees() }
        </ScrollView>
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
