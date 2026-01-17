import { StyleSheet, View,useColorScheme } from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context"
import { Colors } from '../constants/Color'

import React from 'react'

const ThemedView = ({style,safe=false,...props}) => {

      const insets=useSafeAreaInsets()
       const colorScheme=useColorScheme()
        const theme=Colors[colorScheme] ?? Colors.light

   if(!safe){
    return <View style={[{backgroundColor:theme.background},style]} {...props} />
   }

  return (
    // <View style={[{backgroundColor:theme.background},style]} {...props} />
     <View style={[{backgroundColor:theme.background,
                  paddingBottom:insets.bottom,
                  paddingTop:insets.top,
     },style]} {...props} />
        
  )
}

export default ThemedView

const styles = StyleSheet.create({})