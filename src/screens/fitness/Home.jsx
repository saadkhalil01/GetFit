import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const Home = () => {
    const navigation = useNavigation();

    const LogOut=()=>{
        auth().signOut();
        navigation.navigate('login');
    }

    return (
        <>
            <TouchableOpacity onPress={() => { navigation.navigate('dashboard') }}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={LogOut}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})