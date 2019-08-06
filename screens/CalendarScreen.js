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
    {text: '1'},
    {text: '2'},
    {text: '3'},
    {text: '4'},
    {text: '5'},
    {text: '6'},
    {text: '7'},
    {text: '8'},
    {text: '0'},
    {text: '00'},
    {text: '000'},
    {text: '0000'},
    {text: '000000'},
    {text: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'},
  ],
  '2019-08-06': [
    {text: '999'}
  ],
  '2019-08-07': [
    {text: '07070707'}
  ],
  '2019-08-10': [

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
  },
  firstItem: {
    fontSize: 30,
  },
  itemContainer: {
    flex: 1,
  },
  item: {
    fontSize: 20,
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
            {item.text}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>
          {item.text}
        </Text>
      </View>
    );
  }

  renderEmptyDate = () => {
    return (
      <Text>Empty</Text>
    );
  }

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
            renderEmptyDate={this.renderEmptyDate}
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
