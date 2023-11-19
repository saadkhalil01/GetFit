import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '@constants/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function Splash(user) {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => navigation.navigate(user ? 'home' : 'login'), (3000))
        return () => clearTimeout(timer)
    }, [user])

    return (
        <View style={styles.container}>
           
                <Image style={styles.logo} source={require('@images/Meditation.png')} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        height: hp(50),
        width: wp(100)
    }
})