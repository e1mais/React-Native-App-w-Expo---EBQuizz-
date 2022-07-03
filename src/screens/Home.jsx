import AppBar from '../Components/AppBar'
import { View,StyleSheet } from 'react-native'
import Slider from '../Components/Slider'
import StyleText from '../Theme/Text'
import values from '../assets/objects'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen ({ navigation }){
  return (
    <SafeAreaView style={{flex:1}}>
      <AppBar 
        name="person-sharp" 
        color="#999" 
        size={32} 
        route={ ()=>{ navigation.navigate('Login')}} 
        />
      <View style={styles.title}>
        <StyleText fontSize='extraLarge' fontWeight='bold' color='primary'> EBQuizz </StyleText>
      </View>
      
      <Slider navigation={navigation} objects={values}></Slider>
      
    </SafeAreaView>
    
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
