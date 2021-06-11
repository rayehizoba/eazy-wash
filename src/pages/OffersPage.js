import React from 'react';
import {View, ScrollView, Pressable, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';

function OffersPage(props) {

  const pressedCopy = () => {
    ToastAndroid.showWithGravity('Copied to clipboard', ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  return (
    <>
      <Toolbar style={tw`relative`}>
        <View style={tw`absolute left-0`}>
          <Pressable onPress={props.navigation.goBack} android_ripple={{borderless: true}}>
            <Icon name='arrow-left' style={tw`text-gray-400 text-2xl p-2`}/>
          </Pressable>
        </View>
        <Text style={tw`text-base text-gray-400 font-bold text-center`}>
          Offers
        </Text>
      </Toolbar>
      <ScrollView style={tw`p-3`}>
        <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
          {Array(20).fill().map((each, loop) => (
            <View key={loop} style={loop > 0 && tw`border-t-2 border-gray-200`}>
              <Pressable android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                <Space Y={3} key={loop} style={tw`bg-white p-3 px-5`}>
                  <Space Y={1}>
                    <Text style={tw`text-lg text-gray-600 font-bold`}>
                      New User? First wash Free!
                    </Text>
                    <Text style={tw`text-sm text-gray-500`}>
                      Oh! You are a user? Order & get your first You need to do some really cool stuff first
                    </Text>
                  </Space>
                  <TouchableOpacity onPress={pressedCopy}>
                    <Space X={3} style={tw`flex flex-row items-center`}>
                      <View style={tw`bg-blue-50`}>
                        <Text style={tw`text-blue-400 uppercase p-2 px-3 text-xs font-bold tracking-wide`}>
                          Coupon XYZ
                        </Text>
                      </View>
                      <Text style={tw`text-gray-400 text-xs font-medium`}>
                        Tap to copy
                      </Text>
                    </Space>
                  </TouchableOpacity>
                </Space>
              </Pressable>
            </View>
          ))}
        </View>
        <View style={tw`h-6`}/>
      </ScrollView>
    </>
  );
}

export default OffersPage;
