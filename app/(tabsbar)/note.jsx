
import { StyleSheet ,FlatList,Pressable} from 'react-native'
import { Colors } from '../../constants/Color'
import {useNote} from "../../hooks/useNote"
import ThemedCard from "../../components/ThemedCard"
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import {useRouter} from "expo-router"

const Notes = () => {
  const {notes}=useNote()
  const router=useRouter()
 
  return (

      <ThemedView style={styles.container} safe={true}>

      <Space />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
       <Space/>
       <FlatList data={notes}  
         keyExtractor={(item) => item.$id}
         contentContainerStyle={styles.list}
         renderItem={({item})=>(
         <Pressable onPress={()=>router.push(`notes/${item.$id}`)}>
             <ThemedCard style={styles.card}>
                   <ThemedText style={styles.title}>{item.title}</ThemedText>
                </ThemedCard>
         </Pressable>)}
       />
    </ThemedView>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: "stretch",
   },
   heading: {
     fontWeight: "bold",
     fontSize: 18,
     textAlign: "center",
   },
   list: {
     marginTop: 20
   },
   card: {
     width: "90%",
     marginHorizontal: "5%",
     marginVertical: 10,
     padding: 10,
     paddingLeft: 14,
     borderLeftColor: Colors.primary,
     borderLeftWidth: 4
   },
   title: {
     fontSize: 20,
     fontWeight: "bold",
     marginBottom: 10,
   },
 
})
