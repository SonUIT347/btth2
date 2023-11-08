import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Image style={styles.LogoImage} source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }} />
                <Text style={styles.welcome}>Create new account</Text>
            </View>
            <View style={styles.Username}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                    placeholder='Enter username'
                    style={styles.username_input}
                />
            </View>
            <View style={styles.Username}>
                <Feather name="mail" size={24} color="black" />
                <TextInput
                    placeholder='Enter email'
                    style={styles.username_input}
                />
                {/* 20521850 */}
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Enter password'
                    style={styles.username_input}
                />
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Confirm password'
                    style={styles.username_input}
                />
            </View>

            <View style={styles.Login}>
                <TouchableOpacity
                // 20521850
                >
                    <Text style={styles.Login_text}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.haveaccount}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Login now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        height: 100,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    LogoImage: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    Username: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
        margin: 10,
        height: 50,
        borderRadius: 5
    },
    username_input: {
        width: 250,
        height: 30,
    },
    Login: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
        margin: 5,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#ed6415'
    },
    welcome: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    Login_text: {
        color: 'white',
        fontWeight: 'bold'
    },
    orlogin: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    orlogin_text: {
        fontWeight: 'bold'
    },
    orlogin_with: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100
    },
    login_fb: {
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 5
    },
    haveaccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        margin: 5,
        height: 20,
    }
})
export default Register