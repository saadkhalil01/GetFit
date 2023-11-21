import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import CustomAlert from '../../components/CustomAlert'
import textStyles from '../../constants/textStyles'

const Home = () => {
    const navigation = useNavigation();

    const LogOut=()=>{
        auth().signOut();
        navigation.navigate('login');
    }

    return (
        <>
            <TouchableOpacity onPress={() => { navigation.navigate('dashboard') }}>
                <Text style={textStyles.subText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={LogOut}>
                <Text style={textStyles.subText}>Log Out</Text>
            </TouchableOpacity>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})