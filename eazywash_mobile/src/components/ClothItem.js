import React from 'react';
import tw from '../lib/tailwind';
import Space from './Space';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

ClothItem.defaultProps = {
  quantity: 0,
};

function ClothItem(props) {

  const pressedIncrement = () => {
    props.onUpdateQuantity(props.cloth, props.quantity + 1);
  };

  const pressedDecrement = () => {
    if (props.quantity > 0) {
      props.onUpdateQuantity(props.cloth, props.quantity - 1);
    }
  };

  return (
    <Space X={3} style={tw`px-5 py-4 flex flex-row items-center justify-between`}>
      <View style={tw``}>
        <Text style={tw`text-base font-bold text-gray-600`}>
          {props.cloth.name}
        </Text>
        <Text style={tw`text-gray-400 text-xs font-semibold`}>
          ${props.cloth.rate}
        </Text>
      </View>
      <Space X={3} style={tw`flex flex-row items-center`}>
        <Pressable onPress={pressedDecrement} hitSlop={20} android_ripple={{borderless: true}}>
          <Icon name='minus' style={tw`text-gray-400 text-2xl`}/>
        </Pressable>
        <Text style={tw.style(`text-lg font-semibold`, {
          'text-gray-400': props.quantity === 0,
          'text-gray-600': props.quantity > 0,
        })}>
          {props.quantity}
        </Text>
        <Pressable onPress={pressedIncrement} hitSlop={20} android_ripple={{borderless: true}}>
          <Icon name='plus' style={tw`text-gray-400 text-2xl`}/>
        </Pressable>
      </Space>
    </Space>
  );
}

export default ClothItem;
