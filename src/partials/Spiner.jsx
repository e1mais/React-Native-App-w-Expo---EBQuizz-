import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default function Spiner ({ size }) {
  return (
    <View style={styles.layout}>
      <ActivityIndicator size={ size || 'large'} style={styles.spiner}/>
    </View>
  )
}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    justifyContent: 'center', 
    alignItems:'center'},

  spiner:{
    flex: 1, 
    alignSelf:'center'
  }
})