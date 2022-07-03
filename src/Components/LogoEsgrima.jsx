import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import StyleText from '../Theme/Text.jsx'

const uriLogo = require('../assets/img/logo_ebj.png')

const LogoEsgrima = () => { 
  return (
    <View>
      <Image 
        style={styles.logo} 
        source={uriLogo}>
      </Image>
      <StyleText 
        fontWeight='bold' fontSize='large'
        style={styles.texto}>EBQuizz</StyleText>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    margin: 5,
  },
  texto:{
    textAlign: 'center'
  }
})

export default LogoEsgrima