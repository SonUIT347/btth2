import { View, Text, StyleSheet } from 'react-native'
import { Switch } from 'react-native'
import React from 'react'

const SwitchCpn = ({ isDarkmode, toggleSwitch, textColor, title }) => {
    const styles = StyleSheet.create({
        switch: {
            height: 100,
            width: 300,
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        },
        switch_element1: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        switch_element2: {

        },
        switch_element1_darkmode: {
            fontSize: 20,
            color: textColor
        },
        switch_element2_noti: {
            fontSize: 20,
            color: textColor
        },
    })
    return (
        <View style={styles.switch_element1}>
            <Text style={styles.switch_element1_darkmode}>{title}</Text>
            <Switch
                trackColor={{ false: 'white', true: 'green' }}
                thumbColor={isDarkmode ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isDarkmode}
            />
        </View>
    )
}

export default SwitchCpn