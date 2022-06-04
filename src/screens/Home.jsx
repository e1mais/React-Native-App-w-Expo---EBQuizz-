import AppBar from '../Components/AppBar'
import { View,StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Slider from '../Components/Slider'
import StyleText from '../Theme/Text'
import values from '../assets/objects'

export default function HomeScreen ({ navigation }){
  return (
    <>
      <AppBar 
        name="person-sharp" 
        color="#999" 
        size={32} 
        route={ ()=>{ navigation.navigate('Login')}} 
        style={{marginTop: Constants.statusBarHeight}}
        />
      <View style={styles.title}>
        <StyleText fontSize='extraLarge' fontWeight='bold' color='primary'> EBQuizz </StyleText>
      </View>
      
      <Slider objects={values}></Slider>
      
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    flexBasis: 1,
    flexGrow: 1,
    maxHeight: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
