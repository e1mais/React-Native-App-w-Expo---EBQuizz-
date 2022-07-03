import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import StyleText from '../Theme/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import Close from '../partials/Close'
import Spiner from '../partials/Spiner'
import useKeywords from '../Hooks/useKeywords'
import { useTimer } from '../Hooks/useTimer'
import Error from '../partials/Error'
import Question from '../Components/Question'
import Timer from '../Components/Timer'
import { TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import VoiceEntryButton from '../Components/VoiceEntryButton'
import NextButton from '../Components/NextButton'
import Icon from '../partials/Icon'

export default function KeyWords ({ route, navigation, limitQuestions = 10, limitErrors=3}){
  const { timer, decrease, stopped, continued, reset } = useTimer(30)
  const { keywords, loading, error, reload, keyword, getAnotherWord } = useKeywords()
  const [correct, setCorrect] = useState(2)
  const [ limit, setLimit] = useState(0)
  const [err, setErr] = useState(0)

  useEffect(()=>{
    if(route.params?.again){
      setLimit(route.params.again.limit)
      setErr(route.params.again.err)
      setCorrect(route.params.again.correct)
    }
  }, [route.params?.again])

  const [input, setInput] = useState('')
  const handleInput = (text) =>{
    setInput(text)
  }

  const handlingCorrect = () =>{
    if (!input.toLowerCase().includes(keyword.answer.toString().toLowerCase()) || timer() === 0) {
      setCorrect(0)
    } else {
      setCorrect(1)
    }

    stopped()
  }

  const newQuestion = (obj, correct) => {
    if (limit < limitQuestions && err < limitErrors) {
      if (!correct)
        setErr(err + 1)
      
      console.log(limit, err)
      getAnotherWord(obj)
      setCorrect(correct)
      setLimit(limit + 1)
      reset(30)
    } else {
      
    }
  }
  
  const PREFIJO = 'Diga en escencia el versiculo que contiente la palabra clave'

  if(loading) return <Spiner size='large'></Spiner>

  if(error) return <Error title='Palabras Clave' retry={reload} exit={()=> navigation.navigate('Home')}/>
    
  return(
    <SafeAreaView style={styles.container}>
      <Close navigation={navigation} to='Home'/>

      <Question id={keyword.id} type='Pal' text={<StyleText>{PREFIJO} <StyleText fontWeight='bold'>{keyword.word}</StyleText></StyleText>}/> 

        <Timer seconds={timer()} />

        <TextInput style={styles.input} onChangeText={handleInput}></TextInput>

        <View style={styles.answer}>
        {
          (correct === 0) ? <CorrectLayout correct={correct}  action={()=>{newQuestion(keywords, false); setCorrect(2)}} navigate={()=> navigation.navigate('Finish', {asserts: (limit - err), errors: err, from: 'KeyWords'})} obj={keyword} limit={limit} err={err} lquestions={limitQuestions} lerrors={limitErrors}/>
            :
            (correct === 1) ? <CorrectLayout correct={correct} action={()=>{newQuestion(keywords, true); setCorrect(2)}} navigate={()=> navigation.navigate('Finish', {asserts: (limit - err), errors: err, from: 'KeyWords'})}  obj={keyword} limit={limit} err={err} lquestions={limitQuestions} lerrors={limitErrors}/>
              :
              (correct === 2) ?
                <VoiceEntryButton icon='mic' press={handlingCorrect} text='Responder' /> : <></>
        }
      </View>


    </SafeAreaView>
  )
}

function CorrectLayout ({correct, obj, action, navigate, limit, err, lquestions, lerrors }) {
    return(
      <>
        {(correct === 0) ? 
          <Icon name='close-circle' size={48} color='red' style={styles.icon}/> :
         (correct === 1) ? 
          <Icon name='checkmark' size={48} color='green' style={styles.icon} /> : 
         (correct === 2)}
        <View style={{ maxHeight: 70 }}>
          <ScrollView >
            <StyleText style={styles.correctAnswer} fontSize='large'> {obj.answer} </StyleText>
          </ScrollView>
        </View>
        <View style={styles.nextButton}>
          { (limit >= lquestions || err >= lerrors ) ? 
            <NextButton action={navigate} /> :
            <NextButton action={action} />
          }
        </View>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent: 'center'
  },
  input: {
    width: 300,
    maxHeight: 30,
    borderColor: '#333',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },  
  answer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  nextButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start' 
  },
  correctAnswer:{
    color: '#07918A' 
  }
})