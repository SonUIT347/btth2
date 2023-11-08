
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import Categories from '../screen/Categories'
import Profile from '../screen/Profile'
import Favourites from '../screen/Favourites'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native'
import Badge from './Badge'
const Tab = createBottomTabNavigator()
const Tabbar = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false
    }} >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="home"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          //  20521850
        }}
      />
      <Tab.Screen name='Categories' component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ focused }) => {
            return (
                <MaterialIcons
                  name="category"
                  size={24}
                  color={focused ? 'blue' : 'black'} />
            )
          },
          // 20521850
        }}
      />
      <Tab.Screen name='Favourites' component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ focused }) => {
            return (
              <Badge>
                <MaterialIcons
                  name="favorite"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              </Badge>
            )
          },
          // 20521850
        }}
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          // 20521850
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabbar