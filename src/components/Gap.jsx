import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Gap = ({h}) => {
  return (
    <View style={{width:wp(100),height:hp(h)}}>
      
    </View>
  )
}

export default Gap
