import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Gap } from '@components'
import colors from '@constants/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Home = () => {
    const navigation = useNavigation();

    const LogOut = () => {
        auth().signOut();
        navigation.navigate('login');
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.mainBackGround }}>
            <TouchableOpacity onPress={LogOut} style={{height:hp(90),width:wp(100)}}>
                <Text>Content</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'flex-end',marginRight:'5%'}} onPress={() => { navigation.navigate('progress') }}>
                <View style={styles.premiumButton}>
                    <Text style={{ textAlign:'center',color: '#A57C00',fontSize:10, fontWeight: 'bold' }}>Get{'\n'}Premium{'\n'}Plan</Text>
                </View>
            </TouchableOpacity>
            <Gap h={hp(5)}/>
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
        borderRadius:50,
    }
})