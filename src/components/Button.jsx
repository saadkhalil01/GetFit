import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import textStyles from '../constants/textStyles'
import colors from '../constants/colors'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.ButtonShape}>
            <Text style={[textStyles.buttonText,{color:'white',fontWeight:'800'}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    ButtonShape: {
        backgroundColor:colors.redMedium,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:hp(2),
        padding: 10,
        height: hp(6.5),
        width: wp(90),
    }
})