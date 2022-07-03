import { View, StyleSheet, TouchableOpacity} from 'react-native'
import StyleText from '../Theme/Text'
import Icon from '../partials/Icon'
import { SafeAreaView } from 'react-native-safe-area-context'
import Close from '../partials/Close'

export default function Ideas ({navigation}){
  return (
    <SafeAreaView style={{flex: 1, alignContent: 'center'}}>
      <Close navigation={navigation} to='Home' />
      <StyleText> Ideas </StyleText>
    </SafeAreaView>
  )
}