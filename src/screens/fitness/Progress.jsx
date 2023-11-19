import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Progress = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('home')}}>
                <Text>Progress</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({})