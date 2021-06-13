import React from 'react';
import {View, ScrollView, Pressable, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Toolbar from '../components/Toolbar';
import * as offersActions from '../actions/offers';
import {connect} from 'react-redux';
import {useBackHandler} from '@react-native-community/hooks';

function OffersPage(props) {

  const pressedCopy = () => {
    ToastAndroid.showWithGravity('Copied to clipboard', ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  const pressedBack = () => props.navigation.navigate('HomePage');

  useBackHandler(() => {
    pressedBack();
    return true;
  });

  return (
    <>
      <Toolbar title="My Offers" backHandler={pressedBack}/>
      <ScrollView style={tw`p-3`}>
        <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
          {props.offers.collection.map((offer, loop) => (
            <View key={loop} style={loop > 0 && tw`border-t-2 border-gray-200`}>
              <Pressable android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                <Space Y={3} style={tw`bg-white p-3 px-5`}>
                  <Space Y={1}>
                    <Text style={tw`text-lg text-gray-600 font-bold`}>
                      {offer.name}
                    </Text>
                    <Text style={tw`text-sm text-gray-500`}>
                      {offer.about}
                    </Text>
                  </Space>
                  <TouchableOpacity onPress={pressedCopy}>
                    <Space X={3} style={tw`flex flex-row items-center`}>
                      <View style={tw`bg-blue-50`}>
                        <Text style={tw`text-blue-400 uppercase p-2 px-3 text-xs font-bold tracking-wide`}>
                          Coupon: {offer.promo_code}
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

const mapStateToProps = state => ({
  offers: state.offers,
});

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => dispatch(offersActions.fetchOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersPage);
