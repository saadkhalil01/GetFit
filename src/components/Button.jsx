import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.ButtonShape}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    ButtonShape: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        height: 40,
        width: 100
    }
})