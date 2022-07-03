import { TouchableOpacity } from "react-native"
import Icon from '../partials/Icon'

export default function Close ({navigation, to}){
  return(
    <TouchableOpacity style={{width:42,height:42}} onPress={()=> navigation.navigate(to)}>
      <Icon 
          name='close'
          color='#aaa'
          size={42}
          >
      </Icon>
    </TouchableOpacity>
  )
}