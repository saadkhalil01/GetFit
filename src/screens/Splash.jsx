import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => { navigation.navigate('login') }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ''
    }
})