import { StyleSheet, View, Text, StatusBar } from "react-native"
import React, { useState, useEffect } from 'react'
import Contants from 'expo-constants'
import Home from './components/Home'
import Create from './components/Create'
import List from './components/List'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    marginTop: Contants.statusBarHeight
  }
})