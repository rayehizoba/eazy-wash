import {Pressable, Text, View} from 'react-native';
import tw from '../lib/tailwind';
import Space from './Space';
import {dateForHumans, priceForHumans} from '../lib/tools';
import React from 'react';

function OrderListItem(props) {
  const order = props.order;
  return (
    <Pressable onPress={() => props.onPress(order)} android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
      <View style={tw`p-3 flex flex-row items-center`}>
        <View style={tw`h-16 w-16 rounded-xl bg-blue-100 mr-3`}/>
        <Space Y={2} style={tw`flex-1`}>
          <View>
            <Text style={tw`text-lg text-gray-600 font-bold`}>
              Order No: {order.order_number}
            </Text>
            <Text style={tw`text-gray-400 text-xs font-medium`}>
              {dateForHumans(order.updated_at)}
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`bg-${order.status.color}-50 rounded-md p-1 px-2`}>
              <Text style={tw`text-${order.status.color}-500 text-xs tracking-wide font-bold uppercase`}>
                {order.status.status}
              </Text>
            </View>
            <Text style={tw`text-base font-semibold text-gray-400`}>
              {priceForHumans(order.amount)}
            </Text>
          </View>
        </Space>
      </View>
    </Pressable>
  );
}

export default OrderListItem;
