import { View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Touchable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyleText from '../Theme/Text'
import Icon from '../partials/Icon'
import Close from '../partials/Close'
import Question from '../Components/Question'
import Timer from '../Components/Timer'
import VoiceEntryButton from '../Components/VoiceEntryButton'
import NextButton from '../Components/NextButton'
import Spiner from '../partials/Spiner'
import React, { useEffect, useState } from 'react'
import { useTimer } from '../Hooks/useTimer'

export default function Memorices({ navigation, route, limitQuestions = 10, limitErrors = 3 }) {
  const { timer, reset, stopped, continued } = useTimer(31)
  const [textResponse, setTextResponse] = useState('')
  const [loading, setLoading] = useState(true)
  const [start, setStart] = useState(false)
  const [limit, setLimit] = useState(1)
  const [error, setError] = useState(1)
  const [correct, setCorrect] = useState(2) //value 2 as Holding

  const [questions, setQuestions] = useState([])
  const [quest, setQuest] = useState('')

  useEffect(()=>{
    if(route.params?.again){
      setLimit(route.params.again.limit)
      setError(route.params.again.error)
      setCorrect(route.params.again.correct)
    }

  },[route.params?.again])

  const obtainQuestion = (obj) => {
    const random = Math.floor(Math.random() * obj.length)
    const question = obj[random]
    return question
  }

  const fetchingQuestions = async () => {
    const URL = 'https://app-api-ebquizz.herokuapp.com/questions'

    try {
      setLoading(true)
      const res = await fetch(URL)
      const data = await res.json()

      setQuestions(data)
    } catch (err) {
      console.error(err)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchingQuestions()
  }, [])

  useEffect(() => {
    if (timer() === 0) {
      setCorrect(0)
    }
  }, [timer()])

  const newQuestion = (obj, correct) => {
    if (limit <= limitQuestions && error <= 3) {
      console.log(limit, error)
      if (!correct)
        setError(error + 1)

      setQuest(obtainQuestion(obj))
      setCorrect(correct)
      setLimit(limit + 1)
      reset(30)
    } else {

    }
  }

  const handleInput = (text) => {
    setTextResponse(text)
  }

  const handlingCorrect = () => {
    if (!textResponse.toLowerCase().includes(quest.answer.toString().toLowerCase()) || timer() === 0) {
      setCorrect(0)
    } else {
      setCorrect(1)
    }

    stopped()
  }

  return (
    <SafeAreaView style={styles.container} >
      <Close navigation={navigation} to={'Home'} />

      {loading
        ?
        <Spiner size='large' />
        :  start
            ?
            <>
              <View style={{ alignSelf: 'center' }}>
                <TextInput onChangeText={handleInput} />
                <TouchableOpacity
                  style={{ padding: 3, backgroundColor: 'gray' }}
                  onPress={handlingCorrect}>
                  <StyleText style={{ color: '#000' }} fontSize='large'> probar </StyleText>
                </TouchableOpacity>
              </View>

              <Question id={quest.id} type={quest.type} text={quest.text} refer={quest.ref} style={{ paddingHorizontal: 15 }} />
              <Timer seconds={timer()} />
              <TextInput style={styles.input} onChangeText={handleInput}></TextInput>
              <View style={styles.answer}>
                {
                  (correct === 0) ?
                    <>
                      <Icon name='close-circle' size={48} color='red' style={styles.icon}/>
                      <View style={{ maxHeight: 70 }}>
                        <ScrollView >
                          <StyleText style={styles.correctAnswer} fontSize='large'> {quest.answer} </StyleText>
                        </ScrollView>
                      </View>
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        { (limit >= limitQuestions  || error >= limitErrors ) ? 
                          <NextButton action={()=> navigation.navigate('Finish', {asserts: (limit - error), errors: error, from: 'Memorices'})} /> :
                          <NextButton action={() => { newQuestion(questions, false); setCorrect(2) }} />
                        }
                      </View>
                    </>
                    :
                    (correct === 1) ?
                      <>
                        <Icon name='checkmark' size={48} color='green' style={styles.icon} />
                        <View style={{maxHeight: 70}}>
                          <ScrollView>
                            <StyleText style={{ color: '#07918A' }} fontSize='large'> {quest.answer} </StyleText>
                          </ScrollView>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        { (limit >= limitQuestions  || error >= limitErrors ) ? 
                          <NextButton action={()=> navigation.navigate('Finish', {asserts: (limit - error), errors: error, from: 'Memorices'})} /> :
                          <NextButton action={() => { newQuestion(questions, true); setCorrect(2) }} />
                        }
                      </View>
                      </>
                      :
                      (correct === 2) ?
                        <VoiceEntryButton icon='mic' text='Responder' /> : <></>
                }
              </View>
            </>
            : 
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/img/cerebro.png')} style={styles.imageStart}></Image>

                <View style={styles.banner}>
                  <StyleText fontSize='extraLarge' fontWeight='bold' style={{color:'#333'}}>Memorices</StyleText>
                  <StyleText style={styles.textStart}>Es un modo de ensayo en donde debes responder a las preguntas de forma exacta al material de origen</StyleText>
                  <StyleText style={styles.textStart}>¿ya conoces todos los versiculos?</StyleText>
                  <StyleText style={styles.textStart}> Pues ponte a prueba ahora! </StyleText>
                </View>

              <TouchableOpacity onPress={() => { setStart(true); continued(); setQuest(obtainQuestion(questions)); }}>
                <View style={[styles.button, { backgroundColor: '#132fff', borderColor: 'blue', marginVertical: 30 }]}>
                  <Icon name='play' color='#fff' size={34} />
                  <StyleText style={{ color: '#fff' }}>Empezar</StyleText>
                </View>
              </TouchableOpacity>
            </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 75,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#17D00E',
    borderRadius: 15,
    borderColor: '#0C6C07',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    alignContent: 'center'
  },
  answer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    paddingHorizontal: 30
  },
  correctAnswer: {
    color: '#07918A',
    textAlign: 'center'
  },
  input: {
    width: 300,
    maxHeight: 30,
    borderColor: '#333',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  icon:{
    position: 'absolute',
    top: -50,
    left: 10,
  },

  banner: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 5
  },

  textStart: {
    marginVertical: 5,
    color: '#333',
    textAlign: 'center'
  },
  imageStart:{
    width: 100,
    height: 100,
    marginVertical: 20
  }
})