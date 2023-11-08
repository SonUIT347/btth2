import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Header2 = ({textColor}) => {
    const styles = StyleSheet.create({
        text: {
            color: textColor,
            fontWeight: 'bold',
            fontSize: 20
        },
        img_ctn: {
            height: 150,
            width: 150,
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center'
        },
        img: {
            height: 150,
            width: 150,
            borderRadius: 100,
    
        },
        text_ctn: {
            marginTop: 10,
            alignItems: 'center',
    
        },
    })
    return (
        <>
            <View style={styles.img_ctn}>
                <Image style={styles.img} source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}></Image>
            </View>
            <View style={styles.text_ctn}>
                <Text style={styles.text} >React Native App</Text>
            </View>
        </>
    )
    
}

export default Header2