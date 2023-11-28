import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Button, Input, Gap, CustomAlert } from '@components';
import colors from '@constants/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    try {
      if (email && password) {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.replace('home');
          })
          .catch(error => {
             Alert.alert('Kindly Correct your Credentials')
          });
      } else {
        Alert.alert('Please fill all fields');
      }
    } catch (error) {
      Alert.alert('Server down try later')
    }
  };

  const goToSignUp = () => {
    navigation.navigate('signup');
  };

  const goToForgotPassword = () => {
    navigation.navigate('forgotpassword');
  };

  return (
    <View style={styles.container}>
      <Image style={{alignSelf:'center',height:200,width:200}} source={require('@images/Male.png')}/>
            <Gap h={5} />
      <Input text={'Enter your email'} setState={setEmail} state={email} />
      <Gap h={2} />
      <Input text={'Password'} setState={setPassword} state={password} />
      <Gap h={2} />
      <Button text={'Sign In'} onPress={handleLogin} />
      <Gap h={2} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp(55) }}>
        <Text style={{ color: 'grey' }}>Don't have an Account ?</Text>
        <TouchableOpacity onPress={goToSignUp}>
          <Text style={{ fontSize: 19, fontWeight: '600', color:'black',fontStyle:'italic' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Gap h={2} />
      <TouchableOpacity style={{alignSelf:'flex-end',paddingRight:wp(5)}} onPress={goToForgotPassword}>
        <Text style={{color:'grey' }}>Forgot Password ?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

export default Login;
