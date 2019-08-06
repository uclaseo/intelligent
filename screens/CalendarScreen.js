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
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
    {text: 'hello'},
  ],
  '2019-08-06': [
    {text: 'hello'}

  ],
  '2019-08-10': [

  ],
};

const styles = StyleSheet.create({
  agendaContainer: {
    padding: 15,
    paddingBottom: 0,
    marginTop: 7,
    flex: 1,
  },
});

const agendaStyle = {
  height: 500,
  borderRadius: 6,
};

const agendaTheme = {
  calendarBackground: Colors.white,
};

export default class LoggingScreen extends Component {
  
  renderItem = (item, firstItemInDay) => {
    return (
      <Text>{item.text}</Text>
    );
  }

  renderEmptyDate = () => {
    return (
      <Text>Empty</Text>
    );
  }

  rowHasChanged = (row1, row2) => {
    console.log('row1', row1);
    console.log('row2', row2);
    return row1.text !== row2.text;
  }

  render() {
    return (
      <BlackView>
        <View style={styles.agendaContainer}>
          <Agenda
            items={dummyItems}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
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
