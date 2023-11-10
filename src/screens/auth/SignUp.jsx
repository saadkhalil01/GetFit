import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



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
            <TouchableOpacity onPress={() => {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User account created & signed in!');
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                        }

                        console.error(error);
                    })
            }
            }
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