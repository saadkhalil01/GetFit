import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Gap } from '@components'
import colors from '@constants/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import textStyles from '../../constants/textStyles'

const Home = () => {
    const navigation = useNavigation();

    const LogOut = () => {
        auth().signOut();
        navigation.navigate('login');
    }
    const Card = ({ text, image }) => {
        return <TouchableOpacity>
        </TouchableOpacity>
    }
    return (
        <View style={{ alignSelf: 'center', width: wp(90), height: hp(100), justifyContent: 'center' }}>
            <TouchableOpacity onPress={LogOut} style={styles.logoutButton}>
                <Text style={[textStyles.buttonText, { color: 'white', fontSize: 11 }]}>Log Out</Text>
            </TouchableOpacity>
            <View style={{ height: hp(88), width: wp(90), backgroundColor: 'blue', flexDirection: 'column' }}>
                <View style={{ height: hp(20), width: wp(90), backgroundColor: 'yellow' }}>
                    <Text>greetiing</Text>
                </View>
                <View style={{ height: hp(25), backgroundColor: 'orange' }}>
                    <Text>Options</Text>
                </View>
                <View style={{ height: hp(35), backgroundColor: 'red' }}>
                    <Text>Motivational Quotes</Text>
                </View>
            </View>
            <TouchableOpacity style={{ position: "absolute", bottom: hp(5), right: '0%' }} onPress={() => { navigation.navigate('progress') }}>
                <View style={styles.premiumButton}>
                    <Text style={{ textAlign: 'center', color: '#A57C00', fontSize: 10, fontWeight: 'bold' }}>Get{'\n'}Premium{'\n'}Plan</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    premiumButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(7),
        width: hp(7),
        backgroundColor: '#FFB300',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gold'
    },
    logoutButton: {
        position: "absolute",
        top: '2%',
        right: 0,
        height: hp(3),
        width: wp(16),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.redMedium,
        borderRadius: hp(2)
    }
})