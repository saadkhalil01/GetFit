import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

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
            <TouchableOpacity onPress={() => { console.log(email, password) }}
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