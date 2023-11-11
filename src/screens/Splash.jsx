import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '@constants/colors';


export default function Splash() {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => { navigation.navigate('login') }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBackGround
    }
})