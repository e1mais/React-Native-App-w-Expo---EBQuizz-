import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const StyleTextInput = ({style, ...props}) => <TextInput style={[styles.textInput, style]} {...props} /> 

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
})

export default StyleTextInput