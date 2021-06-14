import React from 'react';
import {View, FlatList} from 'react-native';
import tw from '../lib/tailwind';
import Toolbar from '../components/Toolbar';
import * as orderActions from '../actions/order';
import {connect} from 'react-redux';
import OrderListItem from '../components/OrderListItem';
import {firstIter, lastIter} from '../lib/tools';

function OrdersPage(props) {

  const pressedOrder = (order) => () => {
    props.setOrder(order);
    props.navigation.navigate('OrderPage')
  };

  const renderItem = ({item: order, index}) => {
    const style = tw.style(`border-l-2 border-r-2 border-gray-200 border-b-2 overflow-hidden`, {
      'border-t-2 rounded-t-2xl': firstIter(index),
      'rounded-b-2xl': lastIter(index, props.orders.collection)
    });
    return <View style={style}>
      <OrderListItem order={order} onPress={pressedOrder(order)}/>
    </View>;
  };

  return (
    <>
      <Toolbar title="My Orders"/>
      <FlatList
        data={props.orders.collection}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={tw`p-3`}
      />
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
