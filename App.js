
import HomeScreen from './screens/HomeScreen';
import ConfigScreen from './screens/ConfigScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: 'lightgreen'
        },
        headerTintColor: 'darkgray', //esto solo para que recuerden la prop
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "it begins here" }} />
        <Stack.Screen name='Config' component={ConfigScreen} options={{ title: "configurate algo, cat 😎" }} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}