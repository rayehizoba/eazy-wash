import React from 'react';
import {Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';

function Button({title, style, outline, ...pressableProps}) {
  const containerStyle = outline
    ? tw`rounded-xl border-2 border-gray-200 overflow-hidden`
    : tw`rounded-xl bg-blue-600 m-5 overflow-hidden`;
  const textStyle = tw.style(
    `text-sm font-bold tracking-wider uppercase text-center`,
    outline ? `text-blue-600` : `text-white`,
  );
  const androidRippleColor = outline ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)';
  return (
    <View style={[containerStyle, style]}>
      <Pressable {...pressableProps} android_ripple={{color: androidRippleColor}}>
        <View style={tw`p-3`}>
          <Text style={textStyle}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
