import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Button, CustomAlert, Input } from '@components';
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
                        console.log('Check your inbox for the password reset link sent!');
                    })
                    .catch((error) => {
                       
                    });
            } else {
              
            }
        } catch (error) {

        }
    };

    return (
        <>
            <View style={styles.mainContainer}>
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
        backgroundColor: colors.mainBackGround,
    },
});
