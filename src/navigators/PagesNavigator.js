import React from 'react';
import tw from 'tailwind-react-native-classnames';
import HomePage from '../pages/HomePage';
import OffersPage from '../pages/OffersPage';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../components/BottomNavigation';
import OrdersPage from '../pages/OrdersPage';
import ProfilePage from '../pages/ProfilePage';

const Stack = createStackNavigator();

function PagesNavigator(props) {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false, cardStyle: tw`bg-white`}}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="OffersPage" component={OffersPage}/>
        <Stack.Screen name="OrdersPage" component={OrdersPage}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
      </Stack.Navigator>
      <BottomNavigation/>
    </>
  );
}

export default PagesNavigator;
