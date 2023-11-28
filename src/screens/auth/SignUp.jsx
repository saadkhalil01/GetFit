import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constants/colors';
import { Button, Gap, Input } from '../../components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

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
            Alert.alert("Enter email like abc.@xyz.com")
        }
    }

    return (
        <View style={styles.container}>
            
            <Image style={{height:200,width:200}} source={require('@images/SignUpDone.png')}/>
            <Gap h={5} />
            <Input text={'Enter your email'} />
            <Gap h={2} />
            <Input text={'Password'}/>
            <Gap h={2} />
            <Button text={'Register'} onPress={handleSignUp} />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
})