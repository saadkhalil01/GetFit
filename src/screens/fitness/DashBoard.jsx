import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DashBoard = () => {
    const navigation =useNavigation();
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('progress')}}>
                <Text>Dashbooard</Text>
        </TouchableOpacity>
    )
}

export default DashBoard

const styles = StyleSheet.create({})