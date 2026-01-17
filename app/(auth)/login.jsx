import { StyleSheet,Text,Keyboard,TouchableWithoutFeedback} from 'react-native'
import { Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Color'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
// reusable
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Space from '../../components/Space'
import ThemedButton from '../../components/ThemeButton'
import ThemedInput from '../../components/ThemedInput'


const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPasswowrd]=useState("")
 const[error,setError]=useState(null)
  const {login}=useUser()


const getLoginErrorMessage = (error) => {
  if (!error) return "Unknown error";

  switch (error.message) {
    case "Invalid `email` param: Value must be a valid email address":
      return "Valid Email required";

      case "Invalid `password` param: Password must be between 8 and 256 characters long.":
       return "Password must be at least 8 character";

    default:
      return error.message || "Login failed";
  }
};

const handleSubmit=async()=>{
  try{
        await login(email,password)
  }catch(error){
     setError(getLoginErrorMessage(error))
     console.log(error.message)
  }
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>Login Acc</ThemedText>
      {/* input field */}
      <ThemedInput placeholder='Email' style={{width:"80%",marginBottom:20}} onChangeText={setEmail} value={email}/>
        <ThemedInput placeholder='Password' style={{width:"80%",marginBottom:20}} onChangeText={setPasswowrd} value={password} secureTextEntry/>
   {/*  */}
    <ThemedButton onPress={handleSubmit}>
      <Text style={{color:"#fdfdfdff"}}> Login</Text>
    </ThemedButton>
     <Space/>
    {error && <Text style={styles.error}>{error}</Text>}
    <Space height={100} />
{/*  */}
   <Link href="./register">
     <ThemedText>go to Register</ThemedText>
   </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({

    container:{flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:18,
        marginBottom:30
    },
    btn:{
      backgroundColor:Colors.primary,
      padding:15,
      borderRadius:5
    },
    press:{
      opacity:0.5
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