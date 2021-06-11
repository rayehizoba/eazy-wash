import React from 'react';
import {View, ScrollView, Pressable, Text, TouchableOpacity, ToastAndroid, TextInput} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';

function ProfilePage(props) {

  const pressedUpdate = () => {
    ToastAndroid.showWithGravity('Your account has been updated successfully', ToastAndroid.LONG, ToastAndroid.CENTER);
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
          My Profile
        </Text>
      </Toolbar>
      <ScrollView style={tw`p-3`}>
        <View style={tw`flex flex-row justify-center py-5`}>
          <View style={tw`h-24 w-24 rounded-full bg-gray-200`}></View>
        </View>
        <TouchableOpacity>
          <Text style={tw`uppercase text-blue-500 font-bold text-center`}>
            Change Avatar
          </Text>
        </TouchableOpacity>

        <View style={tw`mt-5 border-2 border-gray-200 rounded-2xl`}>
          <View style={tw`border-b-2 border-gray-200 p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Full name
            </Text>
            <View style={tw`flex flex-row`}>
              <TextInput placeholder="Firstname" style={tw`text-base w-1/2 font-semibold text-gray-800`}></TextInput>
              <TextInput placeholder="Surname" style={tw`text-base w-1/2 font-semibold text-gray-800`}></TextInput>
            </View>
          </View>
          <View style={tw`border-b-2 border-gray-200 p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Email address
            </Text>
            <TextInput placeholder="Email address" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`border-b-2 border-gray-200 p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Phone number
            </Text>
            <TextInput placeholder="Email Address" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Delivery Address
            </Text>
            <TextInput placeholder="Delivery Address" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`rounded-xl bg-blue-500 m-5 overflow-hidden`}>
            <Pressable onPress={pressedUpdate} android_ripple={{color: 'rgba(255,255,255,0.25)'}}>
              <View style={tw`p-3`}>
                <Text style={tw`text-white text-sm font-bold tracking-wider uppercase text-center`}>
                  Update Account
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={tw`rounded-xl border-2 border-gray-200 my-5 overflow-hidden`}>
          <Pressable android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
            <View style={tw`p-3`}>
              <Text style={tw`text-blue-500 text-sm font-bold tracking-wider uppercase text-center`}>
                Contact Us
              </Text>
            </View>
          </Pressable>
        </View>
        <Text style={tw`text-xs text-gray-400 text-center`}>
          Made by devshop 🖥️📱 2021
        </Text>
      </ScrollView>
    </>
  );
}

export default ProfilePage;
