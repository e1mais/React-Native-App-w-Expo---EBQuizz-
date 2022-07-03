import { View, StyleSheet} from 'react-native'
import StyleText from '../Theme/Text'

export default function Question({id, type, text, refer, style}) {
  return (
    <View style={styles.counter}>
      <StyleText fontSize='extraLarge'>
          Pregunta Número {id}
      </StyleText>
      <StyleText fontSize='large' style={[styles.question, style]}>
         {
          (type === 'Gen') ? 'Pregunta General' :
          (type === 'Comp-Ref') ? 'Pregunta de Completar, Complete el siguiente versiculo y de su referencia' :
          (type === 'Ref') ? `Pregunta de Referencia, según el libro de ${refer.Lib} ${refer.Cap}:${refer.Ver}` :
          (type === 'Lib-Cap') ? 'Pregunta de Libro y Capitulo, En que libro y Capitulo se menciona lo siguiente: ' : 
          (type === 'Dos-part') ? 'Pregunta de Contexto de dos partes' :
          (type === 'Tres-part') ? 'Pregunta de Contexto de tres partes' :
          (type === 'Comp') ? 'Pregunta de Completar, complete el siguiente versiculo' :
          (type === 'Ident') ? 'Pregunta de Identificación' : 
          (type === 'Geo') ? 'Pregunta de Geografia' :
          (type === 'Sit') ? 'Pregunta de Situación' :
          (type === 'Pal') ? 'Pregunta de contexto de Palabra Clave' :
          (type === 'Mem') ? 'Pregunta de Memorización' : ''
         } {text}
      </StyleText>
    </View>
  )
} 

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    paddingTop: 30
  },

  question:{ 
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
  },
})