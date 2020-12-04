import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
import Intro from './components/AppIntro'
import Login from './components/AuthLogin'
import Signup from './components/AuthSignup'
import Otp from './components/AuthOtp'
import MainApp from './components/AppMainNav'

const App = () => {

  let isLogin = false

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' 
      initialRouteName={isLogin ? 'MainApp' : 'Intro'}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};

export default App;