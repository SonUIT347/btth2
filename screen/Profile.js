import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import useAuth from '../component/useAuth'

const Profile = ({ navigation }) => {
    const {
        setAuth
    } = useAuth()
    const Logout = () => {
        setAuth({ username: '', password: '' })
        navigation.navigate('Login')
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Profile</Text>
            <Button title='Log out'
                onPress={() => Logout()}
            >
            </Button>
        </View>
    )
}

export default Profile