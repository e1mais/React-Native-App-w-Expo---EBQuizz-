import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens 
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/Home'

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();