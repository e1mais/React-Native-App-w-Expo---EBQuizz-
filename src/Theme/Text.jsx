import { Text, StyleSheet, Platform } from 'react-native'
import theme from './theme'

const font = (Platform.OS === 'web') ? 'arial' : 
             (Platform.OS === 'ios') ? 'Verdana' : 'sans-serif-condensed'

const textTheme = StyleSheet.create({
  text:{
    fontFamily: font,
    fontSize: 18,
    color: '#000',
    fontWeight: '400'
  },

  textPrimary: {
    color: theme.colors.textPrimary
  },

  textSecondary: {
    color: theme.colors.textSecondary
  },

  bold: {
    fontWeight: theme.fontWheights.bold
  },

  small: {
    fontSize: theme.fontSizes.small
  },

  normal: {
    fontSize: theme.fontSizes.normal
  },

  medium: {
    fontSize: theme.fontSizes.medium
  },

  large: {
    fontSize: theme.fontSizes.large
 },

  extraLarge: {
    fontSize : theme.fontSizes.extraLarge
  }
})

export default function StyleText ({ children, color, fontSize, fontWeight, style, ...props}){
  const textStyles = [
    textTheme.text,
    color === 'primary' && textTheme.textPrimary,
    color === 'secondary' && textTheme.textSecondary,
    fontSize === 'small' && textTheme.small,
    fontSize === 'normal' && textTheme.normal,
    fontSize === 'medium' && textTheme.medium,
    fontSize === 'large' && textTheme.large,
    fontSize === 'extraLarge' && textTheme.extraLarge,
    fontWeight === 'bold' && textTheme.bold
  ]

  return (
    <Text style={[textStyles, style]} {...props}>
      {children}
    </Text>
  )
}