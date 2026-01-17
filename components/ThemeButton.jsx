
import { Pressable, StyleSheet } from 'react-native'
import { Colors } from "../constants/Color"

function ThemedButton({ style, ...props }) {

  return (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.press, style]} 
      {...props}
    />
  )
}


export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10
  },
  press: {
    opacity: 0.5
  },
})
