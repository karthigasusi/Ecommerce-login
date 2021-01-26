import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/homescreen';
import CartScreen from './src/components/cart';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none">
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;