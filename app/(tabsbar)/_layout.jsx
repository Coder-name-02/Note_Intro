import { StyleSheet,useColorScheme} from 'react-native'
import {Colors} from "../../constants/Color"
import {Ionicons} from "@expo/vector-icons"
import {Tabs} from "expo-router"
import UserAuth from "../../components/auth/UserAuth"

const TabsLayout = () => {

     const colorScheme=useColorScheme()
      const theme=Colors[colorScheme] ?? Colors.light

  return (
   <UserAuth>
   <Tabs screenOptions={{headerShown:false,
  BarStyle:{backgroundColor:theme.navBackground,
                paddingTop:10,
                height:90
                },
  tabBarActiveTintColor:theme.iconColorFocused,
  tabBarInactiveTintColor:theme.iconColor
   }}>

<Tabs.Screen name="profile"  options={{title:"Profile",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "person" : "person-outline"}/>
)}}/>
<Tabs.Screen name="create"  options={{title:"Create",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "create" : "create-outline"}/>
)}}/>
<Tabs.Screen name="note"  options={{title:"Note",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "newspaper" : "newspaper-outline"}/>
)}}/>
<Tabs.Screen name="notes/[id]" options={{href:null}} />
   </Tabs>
   </UserAuth>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})