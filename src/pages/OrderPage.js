import React from 'react';
import {View, ScrollView, Pressable, Text} from 'react-native';
import tw from '../lib/tailwind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';

function OrderPage(props) {
  return (
    <>
      <Toolbar style={tw`relative`}>
        <View style={tw`absolute left-0`}>
          <Pressable onPress={props.navigation.goBack} android_ripple={{borderless: true}}>
            <Icon name='arrow-left' style={tw`text-gray-400 text-2xl p-2`}/>
          </Pressable>
        </View>
        <Text style={tw`text-base text-gray-400 font-bold text-center`}>
          Order No: {props.order.model.order_number}
        </Text>
      </Toolbar>
      <ScrollView style={tw`p-3`}>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
