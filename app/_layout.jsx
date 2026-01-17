import { StyleSheet} from 'react-native'
import {Stack} from "expo-router"
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { UserProvider } from '../context/UserContext'
import { NotesProvider } from '../context/NoteContext'

const RootLayout = () => {

    const colorScheme=useColorScheme()
    const theme=Colors[colorScheme] ?? Colors.light

  return (
    <UserProvider>
    <NotesProvider>
    <StatusBar style="auto"/>
      <Stack screenOptions={{
        headerStyle:{backgroundColor:theme.navBackground},
        headerTintColor:theme.title,
        headerTitleAlign:"center",
        animation:"slide_from_left"
        }}>
       
        <Stack.Screen name="index" options={{title:"Home"}}/>
        <Stack.Screen name="(auth)" options={{headerShown:false}}/>
          <Stack.Screen name="(tabsbar)" options={{headerShown:false}}/>
      </Stack>
      </NotesProvider>
      </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})


