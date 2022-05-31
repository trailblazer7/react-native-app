import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { store } from './src/store/store';


const App = () => {

  const Stak = createStackNavigator();

  return (

    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
