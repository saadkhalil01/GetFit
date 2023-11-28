import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import textStyles from '../constants/textStyles'
import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from 'react-native-responsive-screen'

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
      {/* {
        text==='Password'?(<Image source={require('@images/')}/>):(<></>)
      } */}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputShape: {
    backgroundColor:'white',
    justifyContent:"center",
    paddingLeft:wp(2),
    borderRadius:hp(2),
    borderWidth:1,
    height: hp(8),
    width: wp(90),
   }
})