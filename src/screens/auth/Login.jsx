import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
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
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('signup') }}
        style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, padding: 10, height: 40, width: 100 }}>
        <Text>
          SignUp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('forgotpassword') }}
        style={{ paddingTop: 10 }}>
        <Text>
          Forget Password ?
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})