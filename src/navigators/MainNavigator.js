import {forSlide} from '../lib/navigator.hooks';
import tw from 'tailwind-react-native-classnames';
import PagesNavigator from './PagesNavigator';
import ServicePage from '../pages/ServicePage';
import OrderPage from '../pages/OrderPage';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: forSlide,
      cardStyle: tw`bg-white`,
    }}>
      <Stack.Screen name="PagesNavigator" component={PagesNavigator}/>
      <Stack.Screen name="ServicePage" component={ServicePage}/>
      <Stack.Screen name="OrderPage" component={OrderPage}/>
    </Stack.Navigator>
  );
}

export default MainNavigator;
