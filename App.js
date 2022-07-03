import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//Screens 
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/Home'
import Memorices from './src/screens/Memorices'
import Finish from './src/screens/Finish'
import KeyWords from './src/screens/KeyWords'
import Ideas from './src/screens/Ideas'

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
          <Stack.Screen name="Memorices" component={Memorices} options={{ headerShown: false}} />
          <Stack.Screen name="Finish" component={Finish} options={{headerShown: false }}/>
          <Stack.Screen name="KeyWords" component={KeyWords} options={{headerShown: false}} />
          <Stack.Screen name="Ideas" component={Ideas} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>   
  )
}
