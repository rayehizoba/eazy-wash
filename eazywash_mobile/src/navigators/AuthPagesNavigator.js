import React from "react";
import {connect} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {useKeyboard} from '@react-native-community/hooks';
import tw from 'tailwind-react-native-classnames';
import HomePage from '../pages/HomePage';
import OffersPage from '../pages/OffersPage';
import OrdersPage from '../pages/OrdersPage';
import ProfilePage from '../pages/ProfilePage';
import BottomNavigation from '../components/BottomNavigation';

const Stack = createStackNavigator();

function AuthPagesNavigator (props) {
  const keyboard = useKeyboard();
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false, cardStyle: tw`bg-white`}}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="OffersPage" component={OffersPage}/>
        <Stack.Screen name="OrdersPage" component={OrdersPage}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
      </Stack.Navigator>
      {keyboard.keyboardShown || <BottomNavigation/>}
    </>
  );
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPagesNavigator);
