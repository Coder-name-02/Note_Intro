import { StyleSheet } from 'react-native'
import { useState,useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useNote } from '../../../hooks/useNote'
import { useRouter } from 'expo-router'
import ThemedCard from "../../../components/ThemedCard"
import Space from "../../../components/Space"
import ThemedText from "../../../components/ThemeText"
import ThemedView from "../../../components/ThemedView"
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from "../../../components/ThemeButton"
import { Colors } from '../../../constants/Color'

const Details= () => {

    const{id}=useLocalSearchParams()
    const [notes,setNotes]=useState(null)
    const {fetchNoteById,deleteNote}=useNote()
const router=useRouter()


    const handleDelete= async() =>{
        await deleteNote(id)
        setNotes(null)
        router.replace("/note")
    }

    useEffect(()=>{

        async function  loadNote() {
              const noteData= await fetchNoteById(id)
              setNotes(noteData)
        }

        loadNote()
    },[id])

    if(!notes){
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
           <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{notes.title}</ThemedText>
                <Space/>
                <ThemedText title={true}> Notes</ThemedText>
                <Space />
                    <ThemedText>{notes.description}</ThemedText>
           </ThemedCard>
           <ThemedButton style={styles.delete} onPress={handleDelete}>
              <ThemedText style={{color:"#fff",textAlign:"center"}}>Delete</ThemedText>
           </ThemedButton>
    </ThemedView>
  )
}

export default Details

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"stretch",
    },
    card:{
        margin:20,
    },title:{
        fontSize:30,
        fontWeight:'900',
        marginVertical:10,
    },
    delete:{
        marginTop:40,
        backgroundColor:Colors.warning,
        width:200,
        alignSelf:"center"
    }
})