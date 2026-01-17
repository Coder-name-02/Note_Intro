import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from "expo-router"
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Space from '../components/Space'
import ThemedText from '../components/ThemeText'
import ThemedButton from '../components/ThemeButton'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <ThemedText style={styles.title} title={true}>Note </ThemedText>
      <Space height={50} />
      {/* link */}
       
       <ThemedButton style={styles.newBtn}>
      <Link href="./login" style={styles.link}>
        <ThemedText style={styles.linktext}>Login</ThemedText>
      </Link>
      </ThemedButton>

      <ThemedButton style={styles.newBtn}>
      <Link href="./register" style={styles.link}>
        <ThemedText style={styles.linktext}>SignUp</ThemedText>
      </Link>
      </ThemedButton>
     
       <ThemedButton style={styles.newBtn}>
       <Link href="./profile" style={styles.link}>
        <ThemedText style={styles.linktext}>Profile</ThemedText>
        </Link>
     </ThemedButton>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 120,
    height: 120,
    marginVertical: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  linktext: {
   color:"#ffff"
  },
  newBtn:{
    width:200,
    alignItems:"center"
  }
  // link: {
  //   borderBottomWidth: 1,
  //   marginVertical: 10,
  // },
})