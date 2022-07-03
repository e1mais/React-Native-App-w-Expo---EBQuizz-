import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '../partials/Icon'
import StyleText from '../Theme/Text'

export default function VoiceEntryButton ({ icon, text, press }){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={press}>
        <View style={[styles.button]}>
          <Icon name={icon} color='#fff' size={32} style={{padding: 5}} />
          <StyleText fontSize='extraLarge' style={{color: '#fff'}}>{ text }</StyleText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    flexDirection: 'row',
    height: 75,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#17D00E',
    borderRadius: 15,
    borderColor: '#0C6C07',
    borderWidth: 2
  }
})