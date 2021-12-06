import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './SubScreens/HomeScreen';
import MyNetworkScreen from './SubScreens/MyNetworkScreen';
import PostScreen from './SubScreens/PostScreen';
import NotificationScreen from './SubScreens/NotificationScreen';
import JobsScreen from './SubScreens/JobsScreen';
import auth from '@react-native-firebase/auth'

const Tab = createBottomTabNavigator();

export default class TabNavScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:auth().currentUser.displayName,
      profileImage:auth().currentUser.photoURL,
      userID:auth().currentUser.uid
    };
  }

  render() {
    
    return (
        <Tab.Navigator 
    screenOptions={{
        "tabBarActiveTintColor": "#191919",
        "tabBarInactiveTintColor": "#8C8C8C",
        "tabBarStyle": [
          {
            "display": "flex",
            "backgroundColor": "#FFFFFF"
          },
          null
        ]
    }}
    >
      <Tab.Screen name="Home" initialParams={{ currentuser: this.state.username,userImage:this.state.profileImage,uid:this.state.userID }} component={HomeScreen} options={{
          tabBarLabel: 'Home',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="MyNetwork" initialParams={{ currentuser: this.state.username,userImage:this.state.profileImage,uid:this.state.userID   }} component={MyNetworkScreen} options={{
          tabBarLabel: 'MyNetwork',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="user-friends" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Post"  initialParams={{ currentuser: this.state.username,userImage:this.state.profileImage,uid:this.state.userID   }} component={PostScreen} options={{
          tabBarLabel: 'Post',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="plus-square" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Notification" initialParams={{ currentuser: this.state.username,userImage:this.state.profileImage,uid:this.state.userID   }} component={NotificationScreen} options={{
          tabBarLabel: 'Notification',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="bell" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Jobs" initialParams={{ currentuser: this.state.username,userImage:this.state.profileImage,uid:this.state.userID   }} component={JobsScreen} options={{
          tabBarLabel: 'Jobs',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon  name="briefcase" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
    );
  }
}
