import React from 'react';
import {View, ScrollView, Pressable, Text} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';

function OrdersPage(props) {
  return (
    <>
      <Toolbar style={tw`relative`}>
        <View style={tw`absolute left-0`}>
          <Pressable onPress={props.navigation.goBack} android_ripple={{borderless: true}}>
            <Icon name='arrow-left' style={tw`text-gray-400 text-2xl p-2`}/>
          </Pressable>
        </View>
        <Text style={tw`text-base text-gray-400 font-bold text-center`}>
          Your Orders
        </Text>
      </Toolbar>
      <ScrollView style={tw`p-3`}>
        <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
          {Array(20).fill().map((each, loop) => (
            <View key={loop} style={loop > 0 && tw`border-t-2 border-gray-200`}>
              <Pressable onPress={() => props.navigation.navigate('OrderPage')}
                         android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                <Space X={3} style={tw`p-3 flex flex-row items-center`}>
                  <View style={tw`h-20 w-16 rounded-xl bg-blue-100`}></View>
                  <Space Y={2} style={tw``}>
                    <View>
                      <Text style={tw`text-lg text-gray-600 font-bold`}>
                        Order No: 462687
                      </Text>
                      <Text style={tw`text-gray-400 text-xs font-medium`}>
                        20 June 2018
                      </Text>
                    </View>
                    <View style={tw`flex flex-row justify-start`}>
                      <View style={tw`bg-green-50 rounded-md p-1 px-2`}>
                        <Text style={tw`text-green-500 text-xs tracking-wide font-bold uppercase`}>
                          Confirmed
                        </Text>
                      </View>
                    </View>
                  </Space>
                </Space>
                <Text style={tw`absolute bottom-3 right-3 text-lg font-semibold text-gray-400`}>
                  $256
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View style={tw`h-6`}/>
      </ScrollView>
    </>
  );
}

export default OrdersPage;
