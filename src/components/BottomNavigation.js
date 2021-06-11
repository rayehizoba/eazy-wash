import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';

function RouteIcon(props) {
  const activeStyleName = 'text-blue-500';
  const inactiveStyleName = 'text-gray-300';
  return (
    <Icon
      name={props.name}
      style={tw.style('text-3xl p-2', props.active ? activeStyleName : inactiveStyleName)}
    />
  );
}

function BottomNavigation(props) {

  const route = useRoute();
  const navigation = useNavigation();
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <View style={tw`bg-white py-1 flex flex-row items-center justify-around border-t-2 border-gray-200`}>
      <Pressable onPress={() => navigation.navigate('HomePage')} android_ripple={{borderless: true}}>
        <RouteIcon
          name={'washing-machine'}
          active={routeName === 'HomePage'}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('OrdersPage')} android_ripple={{borderless: true}}>
        <RouteIcon
          name='truck-fast'
          active={routeName === 'OrdersPage'}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('OffersPage')} android_ripple={{borderless: true}}>
        <RouteIcon
          name='tag'
          active={routeName === 'OffersPage'}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ProfilePage')} android_ripple={{borderless: true}}>
        <RouteIcon
          name='account'
          active={routeName === 'ProfilePage'}
        />
      </Pressable>
    </View>
  );
}

export default BottomNavigation;
