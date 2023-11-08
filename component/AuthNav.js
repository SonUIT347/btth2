import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/Login'
import Register from '../screen/Register'
import Profile from '../screen/Profile'
import Tabbar from './Tabbar'
const Stack = createNativeStackNavigator()
const AuthNav = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}>
                {/* 20521850 */}
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Tabbar' component={Tabbar} />
        </Stack.Navigator>
        //   <Text>AuthNav</Text>
    )
}

export default AuthNav