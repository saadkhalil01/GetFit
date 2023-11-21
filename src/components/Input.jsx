import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import textStyles from '../constants/textStyles'
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Input = ({ text, state, setState }) => {
  return (
    <View style={styles.inputShape}>
      <TextInput
        placeholder={text}
        placeholderTextColor={'black'}
        onChangeText={setState}
        value={state}
        style={textStyles.inputText}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputShape: {
    backgroundColor:'white',
    justifyContent:"center",
    paddingLeft:wp(2),
    borderColor: 'black',
    borderWidth: 1,
    height: hp(7),
    width: wp(80),
    borderRightWidth:4,
    borderBottomWidth:4  }
})