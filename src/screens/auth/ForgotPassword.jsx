import { StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const requestPasswordReset = () => {
        if (email) {
            auth().sendPasswordResetEmail(email)
            .then(()=>{
                console.log("Check your inbox for password reset link send!")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else {
            console.log("Please Enter Email!")
        }
    }
    return (
        <View>
            <TextInput
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
                style={{ borderColor: 'black', borderWidth: 1, padding: 10, height: 50, width: 300 }}
            />
            <TouchableOpacity
                onPress={requestPasswordReset}
                style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, padding: 10, height: 40, width: 100 }}>
                <Text>
                    Reset
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})