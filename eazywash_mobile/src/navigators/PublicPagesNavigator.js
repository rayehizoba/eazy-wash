import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {forSlide} from '../lib/navigator.hooks';
import tw from '../lib/tailwind';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createStackNavigator();

function PublicPagesNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: forSlide, cardStyle: tw`bg-white`}}>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="RegisterPage" component={RegisterPage}/>
    </Stack.Navigator>
  );
}

export default PublicPagesNavigator;
