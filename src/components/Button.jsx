import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import textStyles from '../constants/textStyles'
import colors from '../constants/colors'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.ButtonShape}>
            <Text style={textStyles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    ButtonShape: {
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        height: hp(6),
        width: wp(40),
        borderRightWidth:4,
        borderBottomWidth:4,
        borderColor:'black'
    }
})