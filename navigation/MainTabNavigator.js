import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoggingScreen from '../screens/LoggingScreen';
import CalendarScreen from '../screens/CalendarScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoggingStack = createStackNavigator(
  {
    Logging: LoggingScreen,
  },
  config,
);

LoggingStack.navigationOptions = {
  tabBarLabel: 'Log',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      MaterialCommunityIcons
      focused={focused}
      name="chart-line-variant"
    />
  ),
};

LoggingStack.path = '';

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  config,
);

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-calendar'
          : 'md-calendar'
      }
    />
  ),
};

CalendarStack.path = '';

const routeConfigs = {
  LoggingStack,
  CalendarStack,
};

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: Colors.black,
    },
    safeAreaInset: {
      bottom: 'never',
    },
    indicatorStyle: {
      backgroundColor: Colors.black,
    },
    showIcon: true,
    showLabel: false,
  },
};


const tabNavigator = createMaterialTopTabNavigator(
  routeConfigs,
  tabNavigatorConfig,
);

tabNavigator.path = '';

export default tabNavigator;
