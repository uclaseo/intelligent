import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoggingScreen from '../screens/LoggingScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    LoggingStack,
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeBackgroundColor: Colors.black,
      inactiveBackgroundColor: Colors.black,
      style: {
        borderTopColor: Colors.black,
      },
      safeAreaInset: {
        bottom: 'never',
      },
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;
