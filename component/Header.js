import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
// 20521850
        <View style={styles.title_ctn}>       
            <Text style={styles.title} >Social Media Feed</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title_ctn: {
        flexDirection: "column",
        width: "100%",
        height: "5%",
        backgroundColor: "#4dc3ff",
        justifyContent: 'center',
        alignItems: "center"
    },
    title: {
        // {/* 20521850 */}
        color: "white",
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
    },
})
export default Header