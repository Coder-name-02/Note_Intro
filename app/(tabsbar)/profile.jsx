
import { StyleSheet,Text } from 'react-native'
import { useUser } from '../../hooks/useUser'
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from '../../components/ThemeButton'

const Profile = () => {

  const{logout,user}=useUser()
  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
       {user.email}
      </ThemedText>
      <Space />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Space />

<ThemedButton onPress={logout}>
<Text style={{color:"#fff"}}>logout</Text></ThemedButton>

    </ThemedView>
  )
}

export default Profile

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
})