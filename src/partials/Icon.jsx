import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default function Ico ({name , color, size, style, ...props}){
  return (
    <Icon name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`} color={`${color}`} size={size} style={[style]} {...props} />
  )
}
