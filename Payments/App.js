import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Items from './components/Items'
import Pay from './components/Pay'
import Proceed from './components/Proceed'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Items'>
        <Stack.Screen name='Items' component={Items} options={{headerShown: false}} />
        <Stack.Screen name='Pay' component={Pay} options={{headerShown: false}} />
        <Stack.Screen name='Proceed' component={Proceed} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}