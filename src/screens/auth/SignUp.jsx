import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (email && password) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCrediential) => {
                    const user = userCrediential.user
                    user.sendEmailVerification()
                    navigation.navigate('otp')
                })
                .catch(error => {
                    error.code === 'auth/email-already-in-use' ?
                        Alert.alert('That email address is already in use!')
                        :
                        error.code === 'auth/invalid-email' &&
                        Alert.alert('That email address is invalid!')

                })
        }
        else {
            Alert.alert("Please Fill all Fields")
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
            <TextInput
                placeholder='password'
                onChangeText={setPassword}
                value={password}
                style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, padding: 10, height: 50, width: 300 }}
            />
            <TouchableOpacity onPress={handleSignUp}
                style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, padding: 10, height: 40, width: 100 }}>
                <Text>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})