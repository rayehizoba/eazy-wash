import React from 'react';
import Toolbar from '../components/Toolbar';
import tw from '../lib/tailwind';
import {Pressable, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Space from '../components/Space';
import Panel from '../components/Panel';
import * as servicesActions from '../actions/services';
import * as serviceActions from '../actions/service';
import {connect} from 'react-redux';

function ServicePage(props) {

  const groups = [
    {
      name: 'Popular',
      emoji: '🔥',
      emoji_color: 'red',
    },
    {
      name: 'Business Clothes',
      emoji: '👔',
      emoji_color: 'blue',
    },
    {
      name: 'Outerwear',
      emoji: '🧥',
      emoji_color: 'purple',
    },
    {
      name: 'Casual Wear',
      emoji: '👕',
      emoji_color: 'green',
    },
    {
      name: 'Footwear',
      emoji: '👟',
      emoji_color: 'indigo',
    },
    {
      name: 'Napkins & Quilts',
      emoji: '🛏️',
      emoji_color: 'yellow',
    },
  ];

  return (
    <>
      <Toolbar style={tw`relative`}>
        <View style={tw`absolute left-0`}>
          <Pressable onPress={props.navigation.goBack} android_ripple={{borderless: true}}>
            <Icon name='arrow-left' style={tw`text-gray-400 text-2xl p-2`}/>
          </Pressable>
        </View>
        <Text style={tw`text-base text-gray-400 font-bold text-center`}>
          {props.service.model.name}
        </Text>
      </Toolbar>
      <ScrollView style={tw`p-3`}>

        <Space Y={4}>
          {groups.map((group, loop) => (
            <Panel
              key={group.name}
              title={group.name}
              emoji={group.emoji}
              emoji_color={group.emoji_color}
              // expanded={loop === 0}
            >
              {/*<Text style={tw`text-black text-3xl`}>*/}
              {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>*/}
            </Panel>
          ))}
        </Space>

        <View style={tw`h-10`}/>
      </ScrollView>
      {/* Footer Button */}
      <View style={tw`border-t-2 border-gray-200 bg-white`}>
        <View style={tw`rounded-xl bg-blue-600 mx-3 my-5 overflow-hidden`}>
          <Pressable android_ripple={{color: 'rgba(255,255,255,0.25)'}}>
            <View style={tw`p-5 px-6 flex flex-row items-center justify-between`}>
              <Text style={tw`text-white text-sm font-bold uppercase text-center`}>
                Add items to cart (5)
              </Text>
              <Text style={tw`text-sm font-bold text-white uppercase`}>
                Total: $100
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  service: state.service,
});

const mapDispatchToProps = dispatch => ({
  fetchServices: () => dispatch(servicesActions.fetchServices()),
  setService: (service) => dispatch(serviceActions.setService(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
