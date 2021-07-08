import React from 'react';
import {View, FlatList, Pressable, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Toolbar from '../components/Toolbar';
import * as offersActions from '../actions/offers';
import {connect} from 'react-redux';
import {firstIter, lastIter} from '../lib/tools';

function OffersPage(props) {

  const pressedCopy = () => {
    ToastAndroid.showWithGravity('Copied to clipboard', ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  const renderItem = ({item: offer, index}) => {
    const style = tw.style(`border-l-2 border-r-2 border-gray-200 border-b-2 overflow-hidden`, {
      'border-t-2 rounded-t-2xl': firstIter(index),
      'rounded-b-2xl': lastIter(index, props.offers.collection)
    });
    return (
      <View style={style}>
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
    );
  };

  return (
    <>
      <Toolbar title="My Offers"/>
      <FlatList
        data={props.offers.collection}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={tw`p-3`}
      />
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
