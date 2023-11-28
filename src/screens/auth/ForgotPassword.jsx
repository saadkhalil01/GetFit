import { Alert, StyleSheet, View ,Image} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Button, CustomAlert,Gap, Input } from '@components';
import colors from '../../constants/colors';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [trigger, setTrigger] = useState(false);


    const requestPasswordReset = () => {
        try {
            if (email) {
                auth()
                    .sendPasswordResetEmail(email)
                    .then(() => {
                        Alert.alert('Check your inbox for the password reset link sent!');
                    })
                    .catch((error) => {
                        Alert.alert('Please enter a Valid Email')
                    });
            } else {
                Alert.alert("Please fill all fields")
            }
        } catch (error) {
            Alert.alert("Sorry, some issue at Server Side")
        }
    };

    return (
        <>
            <View style={styles.mainContainer}>
            <Image style={{alignSelf:'center',height:200,width:200}} source={require('@images/undraw_Update_re_swkp.png')}/>
            <Gap h={5} />
                <Input text={'Enter your email'} state={email} setState={setEmail} />
                <View style={{ height: 20 }} />
                <Button text={'Request'} onPress={requestPasswordReset} />
            </View>

        </>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
});
