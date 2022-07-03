import { View, StyleSheet, TouchableOpacity } from 'react-native'
import StyleText from '../Theme/Text'
import Icon from '../partials/Icon'

export default function Error ({ title, error, retry, exit }){
  return (
    <View style={styles.container}>
      <Icon name='bug' size={68} color='red' style={styles.bug}/>
      <StyleText fontSize='extraLarge' fontWeight='bold' style={styles.ups}>Ups...</StyleText>

      <View style={styles.card}>
        <StyleText fontSize='large' fontWeight='normal' style={styles.text}>Parece que algo salió mal con {title}</StyleText>
      </View>

      <View style={styles.card}>
        <StyleText>Lo sentimos</StyleText>
      </View>

      <View style={[styles.card, styles.row]}>
        <TouchableOpacity onPress={exit}>
          <View style={styles.exit}>
            <Icon name='home' size={42} color='#333' />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={retry}>
          <View style={styles.retry}>
            <Icon name='reload' size={42} color='#333' />
          </View>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{ 
    flex:1 ,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  card:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical : 20,
    marginHorizontal: 10
  },
  bug:{
    justifyContent: 'center',
    alignSelf: 'center',
    width: 90,
    height: 90
  },
  ups:{
    color: '#444',
    textAlign: 'center'
    
  },
  text:{

  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})