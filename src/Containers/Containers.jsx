import React from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AlertScreen from '../Screens/Alert/AlertScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import NewScreen from '../Screens/News/NewScreen';
import StatisticsScreen from '../Screens/Statistics/StatisticsScreen';
import colors from '../Themes/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Containers() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'ios-home' : 'ios-home';
                break;
              case 'Alert':
                iconName = focused ? 'ios-warning' : 'ios-warning';
                break;
              case 'Statistics':
                iconName = focused ? 'ios-stats' : 'ios-stats';
                break;
              case 'News':
                iconName = focused ? 'ios-paper' : 'ios-paper';
                break;
              default:
                break;
            }
            return <Icon name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          showIcon: true,
          activeTintColor: colors.backgroundColor,
          inactiveTintColor: '#dfe1e4',
          indicatorStyle: {
            height: 0,
          },
          ...Platform.select({
            ios: {
              showLabel: false,
              tabStyle: {
                marginBottom: 20,
              },
            },
            android: {
              showLabel: false,
              tabStyle: {
                marginBottom: 0,
              },
            },
          }),
        }}
        tabBarPosition="bottom"
        initialRouteName="Home"
        swipeEnabled={false}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="News" component={NewScreen} />
        <Tab.Screen name="Alert" component={AlertScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Containers;
