import React from 'react';
import {Text} from 'react-native';
import tw from '../lib/tailwind';

function ValidationError(props) {
  if (props.errors && Array.isArray(props.errors[props.name]) && props.errors[props.name].length) {
    return (
      <Text style={[tw`text-xs text-red-500 font-medium`, props.style]}>
        {props.errors[props.name][0]}
      </Text>
    );
  }
  return null;
}

export default ValidationError;
