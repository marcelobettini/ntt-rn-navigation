//TODO: https://www.npmjs.com/package/@react-navigation/native-stack

import HomeScreen from './screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen></Stack.Screen>
        <Stack.Screen></Stack.Screen> */}
      </Stack.Navigator>



    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
