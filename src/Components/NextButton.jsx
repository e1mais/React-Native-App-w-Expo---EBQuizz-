import {View, StyleSheet, TouchableOpacity } from 'react-native'
import StyleText from '../Theme/Text'
import Icon from '../partials/Icon'

export default function NextButton ({ action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.button}>
        <Icon name='arrow-forward' color='#fff' size={32} />
        <StyleText fontSize='large' style={{color:'#fff'}}>Siguiente</StyleText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#d25400',
    borderColor: '#880015',
    borderWidth: 2,
    height: 75,
    width: 150,
    borderRadius: 15,
  },
  button:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center'
  }
})