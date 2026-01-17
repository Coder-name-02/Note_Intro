
import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/dark.png'
import LightLogo from '../assets/img/light.png'

const ThemedLogo = ({style,...props}) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} style={style} {...props}/>
  )
}

export default ThemedLogo