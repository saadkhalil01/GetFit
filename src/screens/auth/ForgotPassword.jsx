import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>ForgotPassword</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('resetpassword') }}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})