import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';


const App = () => {

  const Stak = createStackNavigator();

  return (
    <NavigationContainer>
      <Stak.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stak.Screen name='Home' component={Home}></Stak.Screen>
        <Stak.Screen name='SignIn' component={SignIn}></Stak.Screen>
        <Stak.Screen name='SignUp' component={SignUp}></Stak.Screen>
      </Stak.Navigator>
    </NavigationContainer>
  );
};

export default App;
