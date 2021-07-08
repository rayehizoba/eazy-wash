import React from 'react';
import {View, ScrollView, Pressable, Text} from 'react-native';
import tw from '../lib/tailwind';
import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';

function OrderPage(props) {
  return (
    <>
      <Toolbar title={`Order No: ${props.order.model.order_number}`}/>
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
