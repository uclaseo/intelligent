import React, { Component, Fragment } from 'react';
import {
  Platform,
  View,
  ScrollView,
  StyleSheet,
  Text,
  DatePickerIOS,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import BlackView from '../components/BlackView';
import CircleButton from '../components/CircleButton';
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
  datePickerIOS: {
    backgroundColor: Colors.red,
  }
});

const agendaStyle = {
  height: 500,
  borderRadius: 6,
};

const agendaTheme = {
  selectedDayBackgroundColor: Colors.red,
  backgroundColor: Colors.white,
  dotColor: Colors.blue,
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
  agendaTodayColor: Colors.blue,
  agendaKnobColor: Colors.green,
  agendaDayTextColor: Colors.lightGray,
  agendaDayNumColor: Colors.lightGray,
};

export default class LoggingScreen extends Component {
  state = {
    datePickerIOS: false,
  };

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

  rowHasChanged = (row1, row2) => {
    return row1.text !== row2.text;
  }

  addEvent = async () => {
    try {
      if (Platform.OS === 'ios') {
        return this.setState({
          datePickerIOS: true,
        });
      }
      const { action, year, month, day } = await DatePickerAndroid.open();
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
      const { actionB, hour, minute } = await TimePickerAndroid.open();
      if (actionB !== TimePickerAndroid.dismissedAction) {

      }
    } catch (error) {
      console.log(error);
    }
  }

  setDateIOS = (newDate) => {
    console.log(newDate);
    this.setState({
      datePickerIOS: false,
    });
  }

  saveDateIOS = () => {
    this.setState({
      datePickerIOS: false,
    });
  }

  render() {
    const { datePickerIOS } = this.state;
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
        <CircleButton
          onPress={this.addEvent}
        >
          <MaterialCommunityIcons
            name="plus"
            size={26}
            style={{ marginBottom: -3 }}
            color={Colors.white}
          />
        </CircleButton>
        {
          datePickerIOS
            ? (
              <Fragment>
                <DatePickerIOS
                  date={new Date()}
                  minuteInterval={5}
                  onDateChange={this.setDateIOS}
                  style={styles.datePickerIOS}
                />
                <CircleButton
                  onPress={this.saveDateIOS}
                >
                  <MaterialCommunityIcons
                    name="check"
                    size={26}
                    style={{ marginBottom: -3 }}
                    color={Colors.white}
                  />
                </CircleButton>
              </Fragment>
            )
            : null
          }

      </BlackView>
    );
  }
}

LoggingScreen.navigationOptions = {
  header: null,
};
