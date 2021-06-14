import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, Pressable} from 'react-native';
import tw from '../lib/tailwind';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';
import * as offersActions from '../actions/offers';
import * as ordersActions from '../actions/orders';
import * as serviceActions from '../actions/service';
import * as servicesActions from '../actions/services';
import {connect} from 'react-redux';
import * as orderActions from '../actions/order';
import Order from '../resources/Order';
import Shimmer from 'react-native-shimmer';
import OrderListItem from '../components/OrderListItem';
import * as app from '../../app.json';

function HomePage(props) {

  React.useEffect(() => {
    props.fetchOffers();
    props.fetchOrders();
    props.fetchServices();
  }, []);

  const pressedService = (service) => () => {
    props.setService(service);
    props.navigation.navigate('ServicePage');
  };

  const pressedOrder = (order) => () => {
    props.setOrder(order);
    props.navigation.navigate('OrderPage');
  };

  const firstFeaturedOffer = props.offers.collection.find((offer) => offer.is_featured);

  const activeOrders = props.orders.collection.filter((order) => Order.isActiveOrder(order));

  const shimmerProps = {
    opacity: 0.75,
    duration: 1000,
    pauseDuration: 1000,
    intensity: 0.5
  };

  return (
    <>
      <Toolbar>
        <Space X={1} style={tw`flex flex-row items-center justify-center`}>
          <Text style={tw`text-lg text-blue-600 font-bold tracking-tighter`}>
            {app.name}
          </Text>
          <Icon name="washing-machine" style={tw`text-2xl text-blue-600`}/>
        </Space>
      </Toolbar>

      <ScrollView style={tw`py-3`}>
        {/* Featured Offer Section */}
        {firstFeaturedOffer && (
          <View style={tw`bg-blue-600 rounded-2xl m-3 p-6`}>
            <Shimmer {...shimmerProps}>
              <Text style={tw`text-2xl font-bold text-white mb-1`}>
                {firstFeaturedOffer.name}
              </Text>
            </Shimmer>
            <Shimmer {...shimmerProps}>
              <Text style={tw`text-white mb-6 text-base font-medium leading-6`}>
                {firstFeaturedOffer.about}
              </Text>
            </Shimmer>
            <Shimmer {...shimmerProps}>
              <TouchableOpacity onPress={() => props.navigation.navigate('OffersPage')}>
                <View style={tw`flex flex-row items-center`}>
                  <Text style={tw`text-white text-base font-semibold tracking-wide`}>
                    View all offers
                  </Text>
                  <Icon name='arrow-right' style={tw`text-white ml-1 text-xl`}/>
                </View>
              </TouchableOpacity>
            </Shimmer>
          </View>
        )}

        <Space Y={10} style={tw`bg-white mt-5`}>
          {/* Our Services Section */}
          <View>
            <Space Y={3} style={tw`px-3`}>
              <Text style={tw`text-2xl font-bold text-gray-700`}>
                Our Services
              </Text>
              <View style={tw`-mx-2 flex flex-row flex-wrap`}>
                {props.services.collection
                  .map((service) => (
                    <View key={service.id} style={tw`w-1/2 p-1`}>
                      <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
                        <Pressable onPress={pressedService(service)} android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
                          <Space X={2} style={tw`flex flex-row p-3`}>
                            <View style={tw`w-6 h-6 bg-blue-200 rounded-full my-px`}/>
                            <View>
                              <Text style={tw`text-base font-bold text-gray-600`}>
                                {service.name}
                              </Text>
                              <Text style={tw`text-gray-400 text-xs font-medium`}>
                                {service.about}
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
              {activeOrders.map((order) => (
                <View key={order.id} style={tw`border-b-2 border-gray-200`}>
                  <OrderListItem order={order} onPress={pressedOrder(order)}/>
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
        <View style={tw`h-6`}/>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  offers: state.offers,
  orders: state.orders,
  services: state.services,
});

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => dispatch(offersActions.fetchOffers()),
  fetchOrders: () => dispatch(ordersActions.fetchOrders()),
  fetchServices: () => dispatch(servicesActions.fetchServices()),
  setOrder: (order) => dispatch(orderActions.setOrder(order)),
  setService: (service) => dispatch(serviceActions.setService(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
