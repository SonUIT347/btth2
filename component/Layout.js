import { View, Text, StyleSheet, Alert, ScrollView, } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Header2 from './Header2';
import SwitchCpn from './SwitchCpn';
import Input from './Input';

const Layout = ({ mode }) => {
    const titleSwitch1 = 'Dark mode'
    const titleSwitch2 = 'Notifycation'
    const [isDarkmode, setIsDarkmode] = useState(false)
    const [isNoti, setIsnoti] = useState(false)
    const [background, setBackground] = useState('white')
    const [backgroundTextInput, setBackgroundTextInput] = useState('white')
    const [textColor, setTextColor] = useState('black')
    const toggleSwitch1 = () => {
        setIsDarkmode(!isDarkmode)
            , isDarkmode ? (setBackground('white'), setTextColor('black'), setBackgroundTextInput('white'))
                : (setBackground('black'), setTextColor('white'), setBackgroundTextInput('#333333'))
    };
    const toggleSwitch2 = () => {
        setIsnoti(!isNoti)
    };
    // 20521850


    const [feedback, setFeedback] = useState([])
    const [array, setArray] = useState([])
    const [temp, setTemp] = useState('')
    const submit = () => {
        // 20521850
        const t = 'Q: ' + temp
        temp != '' ? array.unshift(t) : setArray(array)
        const fb = [...array]
        setFeedback(fb)
        setTemp('')
        if (isNoti) {
            Alert.alert('Thank you for your feed back')
        }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: background,
        },
        switch: {
            height: 100,
            width: 300,
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        },
        feedback: {
            height: 50,
            width: 300,
            flexDirection: 'row',
        },
        // 20521850
        feedback_text: {
            color: textColor,
            fontSize: 25
        },
        textinput_ctn: {
            width: 300,
            backgroundColor: 'white',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: textColor
        },
        touch_ctn: {
            backgroundColor: 'blue',
            height: 30,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            borderRadius: 3
        },
        display_ctn: {
            flexDirection: 'column',
            height: 'auto',
            width: 300
        },
        display: {
            color: textColor,
            fontSize: 20,
            margin: 4
        }
    })
    return (
        <View style={styles.container}>
            <Header2 textColor={textColor} />
            <View style={styles.switch}>
                {/* 20521850 */}
                <SwitchCpn
                    textColor={textColor}
                    isDarkmode={isDarkmode}
                    toggleSwitch={toggleSwitch1}
                    title={titleSwitch1}
                />
                <SwitchCpn
                    textColor={textColor}
                    isDarkmode={isNoti}
                    toggleSwitch={toggleSwitch2}
                    title={titleSwitch2}
                />
            </View>
            <View style={styles.feedback}>
                <Text style={styles.feedback_text}>Feed Back</Text>
            </View>
            {/* 20521850 */}
            <Input
                setTemp={setTemp}
                submit={submit}
                styles={styles}
                temp={temp}
                textColor={textColor}
                backgroundTextInput={backgroundTextInput}
            />
            <View style={styles.display_ctn}>
                {/* 20521850 */}
                <Text style={styles.display}>Frequenly Asked Questions</Text>
                <ScrollView style={{ height: 300 }}>
                    <Text style={styles.display}>{feedback.join('\n')}</Text>
                </ScrollView>
            </View>
        </View>
    )

}

export default Layout