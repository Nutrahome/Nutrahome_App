import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Home from './Home'
import News from './News'
import Dietitians from './Dietitians'
import DietitianProfile from './DietitianProfile'
import Meals from './Meals'
import Booths from './Booths'
import Diary from './Diary'
import Payment from './Payment'
import PaymentConfirm from './PaymentConfirm'
import Pricing from './Pricing'
import Assessment from './Assessment'
import UserProfile from './UserProfile'

function HomeScreen({ navigation }) {
    return (
      <Stack.Navigator headerMode='none' 
      initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Dietitians" component={Dietitians} />
        <Stack.Screen name="DietitianProfile" component={DietitianProfile} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Booths" component={Booths} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="Pricing" component={Pricing} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentConfirm" component={PaymentConfirm} />
        <Stack.Screen name="Assessment" component={Assessment} />
      </Stack.Navigator>
    );
}


export default HomeScreen