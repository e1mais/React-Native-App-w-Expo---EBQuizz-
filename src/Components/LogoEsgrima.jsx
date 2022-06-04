import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import StyleText from '../Theme/Text.jsx'


const LogoEsgrima = () => { 
  return (
    <View>
      <Image 
        style={styles.logo} 
        source={{ uri : "https://lh3.googleusercontent.com/-A1WCl921HKQ/AAAAAAAAAAI/AAAAAAAAAAc/n_YVGB7pYiQ/s640-il/photo.jpg"}}>
      </Image>
      <StyleText 
        fontWeight='bold' fontSize='large'
        style={styles.texto}>EBQuizz</StyleText>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 125,
    height: 125,
    padding: 10,
    margin: 5,
  },
  texto:{
    fontFamily: 'serif',
    textAlign: 'center'
  }
})

export default LogoEsgrima