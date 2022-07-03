import { View, StyleSheet } from 'react-native'
import StyleText from '../Theme/Text'

export default function Timer({seconds}) {
  const color = (seconds > 25) ? '#5EF734' : (seconds <= 25 && seconds > 20) ? '#B3F734' : (seconds <= 20 && seconds >=15) ? '#F8DE34' : (seconds < 15 && seconds > 5) ? '#F7B334' : (seconds <= 5) ? '#F73E34' : '#000'
  return (
    <View style={styles.timer}>
      <StyleText style={[styles.tempo, { color: color }]} fontWeight='bold'>{seconds}</StyleText>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tempo: {
    fontSize: 80,
  },
})