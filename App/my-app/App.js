import React from 'react';

import Home from './CustomPages/home';
import Search from './CustomPages/search';
import Aboutus from './CustomPages/aboutus';
import Character from './CustomPages/character';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false }}>
      <Stack.Screen name="Acceuil" component={Home} />
      <Stack.Screen name="Les Personnages" component={Search}/>
      <Stack.Screen name="A propos" component={Aboutus}/> 
      <Stack.Screen name="Personnage" component={Character}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerStyle: { backgroundColor: '#3B5998'}, tabBarStyle:{backgroundColor: '#3B5998'}, tabBarInactiveTintColor: 'black', tabBarActiveTintColor: '#c0c0c0' }} tabBarOptions={{}}>
        <Tab.Screen name="Accueil" component={StackNavigator} />
        <Tab.Screen name="Les Personnages" component={Search}/>
        <Tab.Screen name="A propos" component={Aboutus}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;