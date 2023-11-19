import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Button, Input, Gap } from '@components'

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      if (email && password) {
        auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert("Logging...")
            navigation.replace('home')
          })
          .catch(error => {
            Alert.alert(error.code)
          })
      }
      else {
        Alert.alert("Please Fill all Fields")
      }
    }
    catch (error) {
      console.log(error.coder)
    }
  }
  const goToSignUp = () => {
    navigation.navigate('signup')
  }
  const goToForgotPassword = () => {
    navigation.navigate('forgotpassword')
  }
  return (
    <View>
      <Input text={'Enter your email'} state={email} setState={setEmail} />
      <Gap h={1}/>
      <Input text={'Password'} state={password} setState={setPassword} />
      <Gap h={1}/>
      <Button text={'Sign In'} onPress={handleLogin} />
      <Gap h={1}/>
      <Button text={'Sign Up'} onPress={goToSignUp} />
      <Gap h={1}/>
      <Button text={'Forgot Password ?'} onPress={goToForgotPassword} />
    </View>
  )
}
export default Login

const styles = StyleSheet.create({})