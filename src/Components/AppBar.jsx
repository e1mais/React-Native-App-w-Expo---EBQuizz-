import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Ico from '../partials/Icon.jsx'
import theme from '../Theme/theme'

const AppBar = ( props ) =>{
  const { isChild } = props
  return (
    (isChild === true) 
      ? ( //AppBar con Ico para regresar al nodo Padre
        <View style={styles.appbar}>
          <TouchableOpacity onPress={props.route}>
            <Ico name={props.name} color={theme.colors.secondary} size={props.size} />
         </TouchableOpacity>
        </View>
      )
      :( //AppBar para el padre
        <View style={[styles.appbar, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity onPress={props.route}>
            <Ico name={props.name} color={props.color} size={props.size} />
          </TouchableOpacity>
        </View>
      )
  )
}

const styles = StyleSheet.create({ 
  appbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5
  }
})

export default AppBar