import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthPagesNavigator from './AuthPagesNavigator';
import PublicPagesNavigator from './PublicPagesNavigator';
import {forSlide} from '../lib/navigator.hooks';
import tw from '../lib/tailwind';
import {connect} from "react-redux";

const Stack = createStackNavigator();

function PagesNavigator(props) {
  const authCheck = props.user.model && props.user.token;
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: forSlide, cardStyle: tw`bg-white`}}>
      {authCheck
        ? <Stack.Screen name="AuthPagesNavigator" component={AuthPagesNavigator}/>
        : <Stack.Screen name="PublicPagesNavigator" component={PublicPagesNavigator}/>}
    </Stack.Navigator>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PagesNavigator);
