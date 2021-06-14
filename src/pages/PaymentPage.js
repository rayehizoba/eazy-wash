import React from 'react';
import Toolbar from '../components/Toolbar';
import {ScrollView, Text, View} from 'react-native';
import tw from '../lib/tailwind';
import Button from '../components/Button';

function PaymentPage(props) {
  return (
    <>
      <Toolbar title="Payment"/>
      <ScrollView style={tw`p-3`}>
        <Text style={tw`text-base`}>
          Choose Time, Place and Payment Method
        </Text>
      </ScrollView>
      {/* Footer Section */}
      <View style={tw`border-t-2 border-gray-200 bg-white p-3`}>
        <Button>
          <View style={tw`py-2 px-3 flex flex-row items-center justify-between`}>
            <Text style={tw`text-white text-sm font-bold uppercase text-center tracking-wider`}>
              Pay Now
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

export default PaymentPage;
