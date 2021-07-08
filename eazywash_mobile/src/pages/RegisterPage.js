import React from 'react';
import {View, ScrollView, Pressable, Text, TouchableOpacity, ToastAndroid, TextInput} from 'react-native';
import tw from '../lib/tailwind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';

function RegisterPage(props) {

  const pressedUpdate = () => {
    ToastAndroid.showWithGravity('Your account has been updated successfully', ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  return (
    <>
      <Toolbar title="Register Now"/>
      <ScrollView style={tw`p-3`}>
        <View style={tw`flex flex-row justify-center py-5`}>
          <View style={tw`h-24 w-24 rounded-full bg-gray-200`}></View>
        </View>
        <TouchableOpacity>
          <Text style={tw`uppercase text-blue-600 font-bold text-center`}>
            Add Photo
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
            <TextInput placeholder="Phone number" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Password
            </Text>
            <TextInput placeholder="Password" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`p-3 pb-0`}>
            <Text style={tw`text-gray-400 font-bold`}>
              Confirm Password
            </Text>
            <TextInput placeholder="Confirm Password" style={tw`text-base font-semibold text-gray-800`}></TextInput>
          </View>
          <View style={tw`rounded-xl bg-blue-600 m-5 overflow-hidden`}>
            <Pressable onPress={pressedUpdate} android_ripple={{color: 'rgba(255,255,255,0.25)'}}>
              <View style={tw`p-3`}>
                <Text style={tw`text-white text-sm font-bold tracking-wider uppercase text-center`}>
                  Register Now
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={tw`h-10`}/>
      </ScrollView>
    </>
  );
}

export default RegisterPage;
