import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, Pressable} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';

function HomePage(props) {
  return (
    <>
      <Toolbar>
        <Space X={1} style={tw`flex flex-row items-center justify-center`}>
          <Text style={tw`text-lg text-blue-500 font-semibold tracking-tighter`}>
            EazyWash
          </Text>
          <Icon name="washing-machine" style={tw`text-2xl text-blue-500`}/>
        </Space>
      </Toolbar>

      <ScrollView style={tw`py-3`}>
        {/* Featured Offer Section */}
        <View style={tw`bg-blue-500 rounded-2xl m-3 p-5 flex flex-row justify-between items-center`}>
          <View style={tw`w-3/5 pr-5`}>
            <Text style={tw`text-xl font-bold text-white mb-1`}>
              Flat 50% off on First Order
            </Text>
            <Text style={tw`text-white text-xs mb-4`}>
              Valid for all new customers this month of June!
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('OffersPage')}>
              <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-white text-base font-semibold tracking-wide`}>
                  View all offers
                </Text>
                <Icon name='arrow-right' style={tw`text-white ml-1 text-xl`}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-col items-center flex-1`}>
            <View style={tw`h-48 w-32 rounded-lg bg-blue-100 opacity-50`}/>
          </View>
        </View>

        <Space Y={10} style={tw`bg-white mt-5`}>
          {/* Our Services Section */}
          <View>
            <Space Y={3} style={tw`px-3`}>
              <Text style={tw`text-2xl font-bold text-gray-700`}>
                Our Services
              </Text>
              <View style={tw`-mx-2 flex flex-row flex-wrap`}>
                {['Dry Cleaning', 'Wash & Fold', 'Ironing', 'Darning']
                  .map((each, loop) => (
                    <View key={loop} style={tw`w-1/2 p-1`}>
                      <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
                        <Pressable onPress={() => props.navigation.navigate('SelectClothesPage')}
                                   android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                          <Space X={2} style={tw`flex flex-row p-3`}>
                            <View style={tw`w-6 h-6 bg-blue-200 rounded-full my-px`}/>
                            <View>
                              <Text style={tw`text-base font-bold text-gray-600`}>
                                {each}
                              </Text>
                              <Text style={tw`text-gray-400 text-xs font-medium`}>
                                12 Hours Min.
                              </Text>
                            </View>
                          </Space>
                        </Pressable>
                      </View>
                    </View>
                  ))}
              </View>
            </Space>
          </View>

          {/* Active Orders Section */}
          <Space Y={3} style={tw`px-3 pb-5`}>
            <Text style={tw`text-2xl font-bold text-gray-700`}>
              Your Active Orders
            </Text>
            <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
              {Array(5).fill().map((each, loop) => (
                <View key={loop} style={tw`border-b-2 border-gray-200`}>
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
                          <View style={tw`bg-blue-50 rounded-md p-1 px-2`}>
                            <Text style={tw`text-blue-500 text-xs tracking-wide font-bold uppercase`}>
                              Pending
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
              <View>
                <Pressable onPress={() => props.navigation.navigate('OrdersPage')}
                           android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                  <View style={tw`p-3 flex flex-row items-center`}>
                    <Text style={tw`text-base font-semibold`}>
                      View past orders
                    </Text>
                    <Icon name='arrow-right' style={tw`text-gray-400 text-lg ml-2`}/>
                  </View>
                </Pressable>
              </View>
            </View>
          </Space>
        </Space>
      </ScrollView>
    </>
  );
}

export default HomePage;
