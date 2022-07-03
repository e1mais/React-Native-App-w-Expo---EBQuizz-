import { View, TouchableOpacity, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from '../partials/Icon'
import StyleText from '../Theme/Text'
import Close from '../partials/Close'

export default function Finish ({ route, navigation }) {
  const { asserts, errors, from } = route.params
  return(
    <SafeAreaView style={styles.container}>
      <Close navigation={navigation} to={'Home'}/>

      <View style={{ alignItems:'center', justifyContent:'center', marginVertical: 20}}>
        <Icon name='receipt-outline' color='#444' size={88} />
      </View>

      <View style={styles.header}>
        <StyleText fontSize='extraLarge' color='primary' fontWeight='bold'>Ensayo Terminado</StyleText>
      </View> 
      <View style={[styles.row,styles.report]}>
        <View style={{flexDirection: 'row'}}>
          <Icon name='close' size={26} color='red' style={{marginRight: 5}}/>
          <StyleText>Errores cometidos</StyleText>
        </View>
        <StyleText>{errors}</StyleText>
      </View>
      <View style={[styles.row,styles.report, {borderTopWidth: 0}]}>
        <View style={{flexDirection:'row'}}>
          <Icon name='checkmark' color='green' size={26} style={{marginRight: 5}}/>
          <StyleText>Respondidas correctamente</StyleText>
        </View>
        <StyleText>{asserts}</StyleText>
      </View>

      <View style={[styles.row, {marginVertical: 40} ]}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <View style={[styles.exit]}>
            <Icon name='home-outline' size={18} color='#fff' style={{marginRight: 10}}/>
            <StyleText fontSize='large' fontWeight='bold' style={{color:'#fff'}}>Salir</StyleText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate({name:from, params:{ again: { limit: 1, err: 1, correct: 2 }, merge: true }})}>
          <View style={[styles.newr]}>
            <Icon name='refresh-outline' size={18} color='#fff' style={{marginRight: 10}}/>  
            <StyleText fontSize='large' fontWeight='bold' style={{color:'#fff'}}>Nuevo ensayo</StyleText>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignContent: 'center'
  }
  ,
  header: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  row:{
    flex:1,
    maxHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  report:{
    borderColor: '#333',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  exit:{
    backgroundColor: 'blue',
    flex:1,
    width: 125,
    height: 75, 
    borderRadius: 5,
    textAlign:'center',
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  newr:{
    backgroundColor: 'orange',
    flex:1,
    width: 165,
    height: 75, 
    borderRadius: 5,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
  
})