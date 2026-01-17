import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard,ScrollView,Platform,KeyboardAvoidingView } from 'react-native'
import { useNote } from "../../hooks/useNote"
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Colors } from '../../constants/Color'
// themed components
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import ThemedInput from "../../components/ThemedInput"
import ThemedButton from '../../components/ThemeButton'


const Create = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
const[error,setError]=useState(null)
  const { createNotes } = useNote()
  const router = useRouter()

  async function handleSubmit() {

    setError(null)

    if(!title.trim() || !description.trim()){
      setError("Title can't be empty")
      return
    }
    setLoading(true)
    await createNotes({title,description})
    // reset value
    setTitle("")
    setDescription("")
    //router 
    router.replace("/note")
    //
    setLoading(false)
  }


  return (
   
    <KeyboardAvoidingView style={{flex:1}} 
    behavior={Platform.OS ==="ios"? "padding" :"height"}>
       <ThemedView style={{flex:1}} safe={true}>
    <ScrollView contentContainerStyle={{flexGrow:1}}
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Space />

        <ThemedInput
          style={styles.input}
          placeholder="Note Title"
          value={title}
          onChangeText={setTitle}
        />
        <Space height={10}/>
          {error && <Text style={styles.error}>{error}</Text>}
 <Space />
        <ThemedInput
          style={styles.multiline}
          placeholder=" Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Space />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Note"}
          </Text>
        </ThemedButton>

      </ThemedView>
         </ScrollView>
         </ThemedView>
      </KeyboardAvoidingView>
    
  )
}
export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 150,
    maxHeight:300,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
    error: {
              color: Colors.warning,
              padding: 10,
              backgroundColor: '#f5c1c8',
              borderColor: Colors.warning,
              borderWidth: 1,
              borderRadius: 6,
              marginHorizontal: 10,
            }
})