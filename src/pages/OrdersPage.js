import React from 'react';
import {View, ScrollView} from 'react-native';
import tw from '../lib/tailwind';
import Toolbar from '../components/Toolbar';
import * as orderActions from '../actions/order';
import {connect} from 'react-redux';
import OrderListItem from '../components/OrderListItem';
import {useBackHandler} from '@react-native-community/hooks';

function OrdersPage(props) {

  const pressedOrder = (order) => () => {
    props.setOrder(order);
    props.navigation.navigate('OrderPage')
  };

  const pressedBack = () => {
    props.navigation.navigate('HomePage');
  };

  useBackHandler(() => {
    pressedBack();
    return true;
  });

  return (
    <>
      <Toolbar title="My Orders" backHandler={pressedBack}/>
      <ScrollView style={tw`p-3`}>
        <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
          {props.orders.collection.map((order, loop) => (
            <View key={order.id} style={loop > 0 && tw`border-t-2 border-gray-200`}>
              <OrderListItem order={order} onPress={pressedOrder(order)}/>
            </View>
          ))}
        </View>
        <View style={tw`h-10`}/>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  setOrder: (order) => dispatch(orderActions.setOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
