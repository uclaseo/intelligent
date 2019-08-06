import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import BlackView from '../components/BlackView';
import Colors from '../constants/Colors';

const dummyItems = {
  '2019-08-05': [
    { trainer: '선호', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '여환', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '선호', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '동영', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '주열', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '여환', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '여환', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '주열', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '주열', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '주열', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '선호', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '선호', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '동영', trainee: '인석', time: '3:00pm - 4:000pm' },
    { trainer: '동영', trainee: '인석', time: '3:00pm - 4:000pm' },
  ],
  '2019-08-06': [
    { trainer: '선호', trainee: '인석', time: '3:00pm - 4:000pm' },
  ],
  '2019-08-07': [
    { trainer: '여환', trainee: '인석', time: '3:00pm - 4:000pm' },
  ],
};

const styles = StyleSheet.create({
  agendaContainer: {
    flex: 1,
  },
  firstItemContainer: {
    backgroundColor: Colors.yellow,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 6,
  },
  firstItem: {
    fontSize: 15,
  },
  itemContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    fontSize: 13,
  },
});

const agendaStyle = {
  height: 500,
  borderRadius: 6,
};

const agendaTheme = {
  'stylesheet.calendar.header': {
    monthText: {
      marginTop: 15,
    },
  },
  'stylesheet.agenda.list': {
    day: {
      width: 63,
      alignItems: 'center',
      // marginBottom: 32,
    },
  },
};

export default class LoggingScreen extends Component {
  getCurrentTime = () => {
    const currentDate = new Date();
    const currentDateString = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000 )).toISOString().split('T')[0];
    return currentDateString;
  }

  renderItem = (item, firstItemInDay) => {
    if (firstItemInDay) {
      return (
        <View style={styles.firstItemContainer}>
          <Text style={styles.firstItem}>
            {item.trainer} - {item.time} : {item.trainee}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>
          {item.trainer} - {item.time} : {item.trainee}
        </Text>
      </View>
    );
  }

  // renderEmptyDate = () => {
  //   return (
  //     <Text>Empty</Text>
  //   );
  // }

  rowHasChanged = (row1, row2) => {
    return row1.text !== row2.text;
  }

  render() {
    const currentDateString = this.getCurrentTime();
    return (
      <BlackView>
        <View style={styles.agendaContainer}>
          <Agenda
            items={dummyItems}
            renderItem={this.renderItem}
            // renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
            selected={currentDateString}
            style={agendaStyle}
            theme={agendaTheme}
          />
        </View>
      </BlackView>
    );
  }
}

LoggingScreen.navigationOptions = {
  header: null,
};
