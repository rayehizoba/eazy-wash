import React from 'react';
import tw from '../lib/tailwind';
import {View} from 'react-native';

function Toolbar(props) {
  return (
    <View
      style={tw.style(`border-b-2 border-gray-200 px-3 h-12 flex flex-row items-center justify-center`, props.style)}>
      {props.children}
    </View>
  );
}

export default Toolbar;
