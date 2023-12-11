import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Gap } from '@components'
import colors from '@constants/colors'
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
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
    const data = [
        {
            image: require("@images/Activity.png"),
            title: 'Steps & Heart',
            id: 1
        },
        {
            image: require("@images/Fitness.png"),
            title: 'Stamina',
            id: 2
        },
        {
            image: require("@images/Drinking.png"),
            title: 'Water Intake',
            id: 3
        },
        {
            image: require("@images/Meditation.png"),
            title: 'Meditation',
            id: 4
        }
    ]
    return (
        <View style={{ alignSelf: 'center', width: wp(90), height: hp(100) }}>
            <Text style={[textStyles.heading, { color: 'black',marginTop:hp(10),fontSize:35,marginBottom:hp(2) }]}> 👋🏻 Hi Saad!</Text>
            <TouchableOpacity onPress={LogOut} style={styles.logoutButton}>
                <Text style={[textStyles.buttonText, { color: 'white', fontSize: 11 }]}>Log Out</Text>
            </TouchableOpacity>
            <View style={{ width: wp(90),height:hp(70),flexDirection: 'column',justifyContent:'center'}}>
                <View>
                    <Text style={[textStyles.heading, { color: colors.redNormal }]}> Todos</Text>
                    <Gap h={2} />
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ height: hp(18), width: hp(18), backgroundColor: 'white', borderColor: colors.redNormal, borderRadius: hp(2), alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginRight: hp(1) }}>
                                    <Image source={item.image} style={{ height: hp(10), width: hp(10) }} />
                                    <Text style={{ fontWeight: '400', alignSelf: 'center', color: colors.redNormal, fontSize: 10 }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Gap h={5} />
                <Text style={[textStyles.heading, { color: colors.redNormal }]}> Today's Motivation</Text>
                <Gap h={3} />
                <View style={styles.motivationQuoteCard}>
                    <Text style={{ fontWeight: '500', fontStyle: 'italic', color: 'black', fontSize: 18, width: '80%', textAlign: 'center', marginBottom: '2%' }}>"Motivation Text Will be here"</Text>
                    <Text style={{ fontWeight: '800', alignSelf: 'flex-end', paddingEnd: '10%', color: colors.redNormal, fontSize: 11 }}>Williams Sheikh Spear</Text>
                </View>
            </View>
            <TouchableOpacity style={{ position: "absolute", bottom: hp(5), right: '0%' }} onPress={() => { navigation.navigate('progress') }}>
                <View style={styles.premiumButton}>
                    <Text style={{ textAlign: 'center', color: 'grey', fontSize: 10, fontWeight: 'bold' }}>Get{'\n'}Premium{'\n'}Plan</Text>
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
        paddingVertical: hp(0.3),
        paddingHorizontal: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: hp(0)
    },
    motivationQuoteCard: {
        height: hp(25),
        borderWidth: 1,
        borderColor: colors.redNormal,
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.redPrimary
    }
})