import React from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback, TextInput} from 'react-native';
import tw from '../lib/tailwind';
import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';
import ClothItem from '../components/ClothItem';
import Button from '../components/Button';
import Space from '../components/Space';
import * as basketActions from '../actions/basket';
import {priceForHumans, removeDuplicates} from '../lib/tools';

function OrderReviewPage(props) {

  const inputCoupon = React.useRef(null);

  const pressedConfirm = () => {
    props.navigation.navigate('PaymentPage');
  };

  const updatedQuantity = (serviceId) => (cloth, quantity) => {
    props.updateItem(cloth.id, serviceId, quantity, Number(cloth.rate));
  };

  const pressedAddMore = () => props.navigation.navigate('HomePage');

  React.useEffect(() => {
    if (props.basket.collection.length === 0) {
      props.navigation.goBack();
    }
  }, [props.basket.collection]);

  return (
    <>
      <Toolbar title="Order Review"/>
      <ScrollView style={tw`p-3`}>
        {props.servicesIds.map(serviceId => (
          <View key={serviceId} style={tw`mb-8`}>
            <Text style={tw`text-xl font-bold text-gray-600 mb-3`}>
              {props.services.map[serviceId].name}
            </Text>
            <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
              {props.basket.collection
                .filter((item) => item.service_id === serviceId)
                .map((item, loop) =>
                  <View
                    key={props.clothes.map[item.cloth_id].id}
                    style={loop > 0 && tw`border-gray-200 border-t-2`}
                  >
                    <ClothItem
                      cloth={props.clothes.map[item.cloth_id]}
                      key={props.clothes.map[item.cloth_id].id}
                      quantity={item.quantity}
                      onUpdateQuantity={updatedQuantity(serviceId)}
                    />
                  </View>,
                )
              }
            </View>
          </View>
        ))}
        <Space Y={4} style={tw`mb-8`}>
          <Button title="Add More Items" onPress={pressedAddMore} outline/>
          <Button title="Clear All" onPress={props.clearAll} outline/>
        </Space>
        <View style={tw`border-2 border-gray-200 p-3 rounded-2xl mb-8`}>
          <TouchableWithoutFeedback onPress={() => inputCoupon.current.focus()}>
            <Text style={tw`text-blue-600 text-base font-medium`}>
              Do you have a Promo Code ?
            </Text>
          </TouchableWithoutFeedback>
          <TextInput
            ref={inputCoupon}
            style={tw`text-xl font-medium text-gray-800 p-1`}
          />
        </View>
        <Space Y={2} style={tw`mb-8 px-3`}>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-medium text-gray-400`}>
              Subtotal
            </Text>
            <Text style={tw`text-lg font-medium`}>
              {priceForHumans(props.basketTotalRate)}
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-medium text-gray-400`}>
              Tax
            </Text>
            <Text style={tw`text-lg font-medium`}>
              $0
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-semibold text-blue-600`}>
              Payable Amount
            </Text>
            <Text style={tw`text-lg font-semibold text-blue-600`}>
              {priceForHumans(props.basketTotalRate)}
            </Text>
          </View>
        </Space>
      </ScrollView>
      {/* Footer Section */}
      <View style={tw`border-t-2 border-gray-200 bg-white p-3`}>
        <Button onPress={pressedConfirm}>
          <View style={tw`py-2 px-3 flex flex-row items-center justify-between`}>
            <Text style={tw`text-white text-sm font-bold uppercase text-center tracking-wider`}>
              Confirm Order
            </Text>
            <Text style={tw`text-sm font-bold text-white uppercase tracking-wider`}>
              {priceForHumans(props.basketTotalRate)}
            </Text>
          </View>
        </Button>
      </View>
    </>
  );
}

const itemRateMap = (item) => item.quantity * item.rate;
const basketReducer = (accumulator, currentValue) => accumulator + currentValue;

const mapStateToProps = state => ({
  basket: state.basket,
  clothes: state.clothes,
  services: state.services,
  servicesIds: removeDuplicates(
    state.basket.collection.map((item) => item.service_id)
  ),
  basketTotalRate: state.basket.collection
    .map(itemRateMap)
    .reduce(basketReducer, 0)
    .toFixed(2),
});

const mapDispatchToProps = dispatch => ({
  clearAll: () => dispatch(basketActions.clearAll()),
  updateItem: (cloth_id, service_id, quantity, rate) =>
    dispatch(basketActions.updateItem(cloth_id, service_id, quantity, rate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderReviewPage);
