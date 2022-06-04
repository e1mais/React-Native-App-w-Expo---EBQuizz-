import LogoEsgrima from '../Components/LogoEsgrima'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import LoginEB from '../Components/Login'
import AppBar from '../Components/AppBar'
import { View, StyleSheet } from 'react-native'

const LoginScreen = ({ navigation }) =>{
  return (
    <>
      <StatusBar style='dark'/>
      <AppBar isChild={true} name="arrow-back-outline" size={32} style={{marginTop: Constants.statusBarHeight, padding: 10}} route= { ()=>{ navigation.goBack()}}/>
      <View style={styles.container}>
        <LogoEsgrima />
        <LoginEB />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default LoginScreen