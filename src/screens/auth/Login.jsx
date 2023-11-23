import React, { useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Button, Input, Gap, CustomAlert } from '@components';
import colors from '@constants/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';

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

          });
      } else {

      }
    } catch (error) {
 
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
      <Input text={'Enter your email'} setState={setEmail} state={email}/>
      <Gap h={2} />
      <Input text={'Password'} setState={setPassword} state={password}/>
      <Gap h={2} />
      <Button text={'Sign In'} onPress={handleLogin} />
      <Gap h={2} />
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:widthPercentageToDP(55)}}>
        <Text style={{color:'white'}}>Don't have an Account?</Text>
        <TouchableOpacity onPress={goToSignUp}>
          <Text style={{fontSize:19,fontWeight:'600',color:'gold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Gap h={2} />
      <TouchableOpacity onPress={goToForgotPassword}>
        <Text style={{color:'white'}}>Forgot Password ?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:colors.mainBackGround
  },
});

export default Login;
