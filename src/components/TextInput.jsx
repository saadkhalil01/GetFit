import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({text,state,setState}) => {
  return (
    <View>
       <TextInput
        placeholder={text}
        onChangeText={setState}
        value={state}
        style={{ borderColor: 'black', borderWidth: 1, padding: 10, height: 50, width: 300 }}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})