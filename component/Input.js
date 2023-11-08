import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Input = ({setTemp,submit,styles,temp, textColor, backgroundTextInput}) => {
    return (
        <>
            <View style={styles.textinput_ctn}>
                {/* 20521850 */}
                <TextInput
                    multiline
                    numberOfLines={5}
                    maxLength={40}
                    onChangeText={text => { setTemp(text) }}
                    value={temp}
                    placeholder='Your feed back here'
                    placeholderTextColor={textColor}
                    style={{ padding: 10, backgroundColor: backgroundTextInput, color: textColor }}
                />
            </View>
            <View style={styles.touch_ctn}>
                <TouchableOpacity onPress={() => submit()} >
                    <Text style={{ color: 'white' }}>Send feedback</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Input