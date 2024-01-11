import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNavigation  from './src/components/TopNavigation';
import DrawerHome from './src/components/HomeDrawer';
import Settings from './src/components/Settings';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStackScreen = () => (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false}} name="HomeScreen" component={Home} />
      <Tab.Screen options={{headerTitleAlign: 'center'}} name="SettingsScreen" component={Settings} />
    </Tab.Navigator>  
  )
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen  name="Home" component={DrawerHome} />
        <Stack.Screen name="About" component={HomeStackScreen} />
        <Stack.Screen name="Settings" component={TopNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  }
})