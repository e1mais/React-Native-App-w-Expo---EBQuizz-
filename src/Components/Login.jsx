import React from 'react'
import { View, Button, StyleSheet, Text, TouchableOpacity, Alert }  from 'react-native'
import { Formik } from 'formik'
import StyleTextInput from '../partials/StyleTextInput.jsx'
import StyleText from '../Theme/Text'
import theme from '../Theme/theme'

const initValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    width: 300,
    height: 200,
    padding: 20,
    justifyContent: 'space-around'
  },

  button: {
    backgroundColor: theme.colors.secondary,
    textTransform: 'lowercase'
  },

  actions: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const LoginEB = () => {
  return(
    <Formik 
      initialValues={initValues} 
      onSubmit={values => {
      console.log(values)
    }}>
      {({handleChange, handleSubmit, values})=>{
        return (
          <View style={styles.form}>
              <StyleTextInput key='email' placeholder='E-mail' value={values.email} onChangeText={handleChange('email')} />
              <StyleTextInput key='password' placeholder='Contraseña' value={values.password} onChangeText={handleChange('password')} />
              <View style={styles.actions}>
                <Button style={styles.button} onPress={ handleSubmit } title='Iniciar Sesión' />
                <TouchableOpacity onPress={()=>{Alert.alert('Ha presionado crear cuenta')}}>
                  <StyleText fontSize='normal' fontWeight='bold' color='primary'>Crear Cuenta</StyleText>
                </TouchableOpacity>
              </View>
          </View>
        )
      }}
    </Formik>
  )
}

export default LoginEB