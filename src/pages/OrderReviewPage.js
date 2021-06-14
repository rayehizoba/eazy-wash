import React from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback, TextInput} from 'react-native';
import tw from '../lib/tailwind';
import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';
import ClothItem from '../components/ClothItem';
import Button from '../components/Button';
import Space from '../components/Space';

function OrderReviewPage(props) {

  const inputCoupon = React.useRef(null);

  const pressedConfirm = () => {
    props.navigation.navigate('PaymentPage');
  };

  return (
    <>
      <Toolbar title="Order Review"/>
      <ScrollView style={tw`p-3`}>
        {['Dry Cleaning', 'Wash & Fold'].map(service => (
          <View key={service} style={tw`mb-8`}>
            <Text style={tw`text-xl font-bold text-gray-600 mb-3`}>
              {service}
            </Text>
            <View style={tw`border-2 border-gray-200 rounded-2xl overflow-hidden`}>
              {props.clothes.collection.slice(0, 3).map((cloth, loop) =>
                <View key={cloth.id} style={loop > 0 && tw`border-gray-200 border-t-2`}>
                  <ClothItem cloth={cloth} key={cloth.id}/>
                </View>,
              )}
            </View>
          </View>
        ))}
        <Space Y={4} style={tw`mb-8`}>
          <Button title="Add More Items" outline/>
          <Button title="Clear All" outline/>
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
              $100
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-medium text-gray-400`}>
              Tax
            </Text>
            <Text style={tw`text-lg font-medium`}>
              $10
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-semibold text-blue-600`}>
              Payable Amount
            </Text>
            <Text style={tw`text-lg font-semibold text-blue-600`}>
              $110
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
              $110
            </Text>
          </View>
        </Button>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  clothes: state.clothes,
});

export default connect(mapStateToProps)(OrderReviewPage);
