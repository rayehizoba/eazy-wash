import React from 'react';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function Toolbar(props) {
  const navigation = useNavigation();
  const pressedBack = () => {
    if (typeof props.backHandler === 'function') {
      props.backHandler();
    } else {
      navigation.goBack();
    }
  }
  return (
    <View
      style={tw.style(`border-b-2 border-gray-200 px-3 h-12 flex flex-row items-center justify-center`, props.style)}>
      {props.title && (
        <>
          <View style={tw`absolute left-2`}>
            <Pressable onPress={pressedBack} android_ripple={{borderless: true}}>
              <Icon name='arrow-left' style={tw`text-blue-600 text-2xl p-2`}/>
            </Pressable>
          </View>
          <Text style={tw`text-base text-blue-600 font-bold text-center`}>
            {props.title}
          </Text>
        </>
      )}
      {props.children}
    </View>
  );
}

export default Toolbar;
