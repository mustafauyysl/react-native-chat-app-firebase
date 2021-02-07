import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import NameScreen from '../screens/NameScreen';
import UsersScreen from '../screens/UsersScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';

const BottomTabNavigator = createBottomTabNavigator();
const MainStackNavigator = createStackNavigator();

Icon.loadFont();

const MainBottomTabNavigator = (props) => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Users':
              iconName = 'users';
              break;
            case 'Chats':
              iconName = 'message-circle';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: 'gray',
      }}>
      <BottomTabNavigator.Screen
        name="Users"
        component={UsersScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Chats"
        component={ChatsScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Settings"
        component={SettingsScreen}></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <MainStackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
        <MainStackNavigator.Screen
          name="Name"
          component={NameScreen}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
        <MainStackNavigator.Screen
          name="Home"
          component={MainBottomTabNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}></MainStackNavigator.Screen>
        <MainStackNavigator.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTintColor: Colors.primaryColor,
          }}></MainStackNavigator.Screen>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
