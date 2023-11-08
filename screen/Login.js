import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import useAuth from '../component/useAuth'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Login = ({ navigation }) => {
    const {
        auth,
        setAuth,
    } = useAuth()
    console.log(auth)
    const setUser = (name, value) =>{
        setAuth({ ...auth, [name]: value })
    }
    const handleAccount = () => {
        // const username = '20521850@gm.uit.edu.vn'
        const username = 'a'
        // const password = 'tranvanson'
        const password = 'a'
        console.log(auth.password)
        console.log(auth.username)
        if (auth.password === password && auth.username === username) {
            navigation.navigate('Tabbar')
        } else {
            Alert.alert('Incorrect email or password')
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Image style={styles.LogoImage} source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }} />
                <Text style={styles.welcome}>Welcome</Text>
            </View>
            <View style={styles.Username}>
                <Feather name="mail" size={24} color="black" />
                <TextInput
                    placeholder='Enter username'
                    value={auth.username}
                    onChangeText={(text) => setUser('username', text)}
                    style={styles.username_input}
                />
            </View>
            {/* 20521850 */}
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Enter password'
                    value={auth.password}
                    onChangeText={(text) => setUser('password', text)}
                    style={styles.username_input}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.fogotpass}>
                <Text style={styles.fogotpass_text}>Forgot passowrd</Text>
            </View>
            <View style={styles.Login}>
                <TouchableOpacity
                    onPress={() => (handleAccount())}
                >
                    {/* 20521850 */}
                    <Text style={styles.Login_text}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orlogin}>
                <Text style={styles.orlogin_text}>Or login with</Text>
                <View style={styles.orlogin_with}>
                    <TouchableOpacity>
                        <Image style={styles.login_fb}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.login_fb}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png' }}
                        />
                    </TouchableOpacity>
                    {/* 20521850 */}
                </View>
            </View>
            <View style={styles.haveaccount}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Sign up here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        height: 100,
        width: 100,
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
        // 205218520
        borderRadius: 5
    },
    username_input: {
        width: 250,
        height: 30,
    },
    fogotpass: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 300,
        margin: 5,
        height: 10,
    },
    fogotpass_text: {
        color: '#fc03b6',
        height: 20
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
        // 20521850
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
    // 20521850
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
export default Login