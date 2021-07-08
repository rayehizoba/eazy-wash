import React from 'react';
import Toolbar from '../components/Toolbar';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as categoriesActions from '../actions/categories';
import * as basketActions from '../actions/basket';
import * as clothesActions from '../actions/clothes';
import ClothItem from '../components/ClothItem';
import Accordion from 'react-native-collapsible/Accordion';
import Button from '../components/Button';
import {priceForHumans} from '../lib/tools';

function ServicePage(props) {

  React.useEffect(() => {
    props.fetchCategories();
    props.fetchClothes();
  }, []);

  const [activeSections, setActiveSections] = React.useState([]);

  const updatedQuantity = (cloth, quantity) => {
    props.updateItem(cloth.id, props.service.model.id, quantity, Number(cloth.rate));
  };

  const getQuantity = (cloth) => {
    const item = props.basket.collection.find((item) => {
      return item.cloth_id === cloth.id && item.service_id === props.service.model.id;
    });
    return item ? item.quantity : 0;
  };

  const renderHeader = (category) => (
    <View style={tw``}>
      <View style={tw`flex flex-row items-center justify-between p-5`}>
        <Text style={tw`text-xl font-bold text-gray-700`}>
          {category.name}
        </Text>
        <View
          style={tw`rounded-full h-12 w-12 flex flex-row items-center justify-center ${category.color || 'bg-blue-100'}`}>
          <Text style={tw`text-2xl`}>
            {category.emoji}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderContent = (category) => props.clothes.collection.map((cloth) =>
    <View key={cloth.id} style={tw`border-gray-200 border-t-2`}>
      <ClothItem
        cloth={cloth}
        quantity={getQuantity(cloth)}
        onUpdateQuantity={updatedQuantity}
        key={cloth.id}
      />
    </View>,
  );

  const pressedAddToCart = () => {
    props.navigation.navigate('OrderReviewPage');
  };

  return (
    <>
      <Toolbar title={props.service.model.name}/>
      <Accordion
        sections={props.categories.collection}
        activeSections={activeSections}
        onChange={setActiveSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        touchableComponent={Pressable}
        touchableProps={{android_ripple: {color: 'rgba(0,0,0,0.05)'}}}
        containerStyle={tw`p-3`}
        sectionContainerStyle={tw`border-2 border-gray-200 rounded-3xl mb-5 overflow-hidden`}
        renderAsFlatList
        keyExtractor={item => item.id}
      />
      {/* Footer Section */}
      <View style={tw`border-t-2 border-gray-200 bg-white p-3`}>
        <Button
          onPress={pressedAddToCart}
          disabled={props.basketTotalQty === 0}
          style={props.basketTotalQty === 0 && tw`bg-gray-200`}
        >
          {props.basketTotalQty === 0 && (
            <Text style={tw`py-2 px-3 text-gray-400 text-sm font-bold uppercase tracking-wider text-center`}>
              Your basket is empty
            </Text>
          )}
          {props.basketTotalQty > 0 && (
            <View style={tw`py-2 px-3 flex flex-row items-center justify-between`}>
              <Text style={tw`text-white text-sm font-bold uppercase text-center tracking-wider`}>
                Add {props.basketTotalQty} items to basket
              </Text>
              <Text style={tw`text-sm font-bold text-white uppercase tracking-wider`}>
                {priceForHumans(props.basketTotalRate)}
              </Text>
            </View>
          )}
        </Button>
      </View>
    </>
  );
}

const itemQtyMap = (item) => item.quantity;
const itemRateMap = (item) => item.quantity * item.rate;
const basketReducer = (accumulator, currentValue) => accumulator + currentValue;

const mapStateToProps = state => ({
  basket: state.basket,
  categories: state.categories,
  clothes: state.clothes,
  service: state.service,
  basketTotalQty: state.basket.collection.map(itemQtyMap).reduce(basketReducer, 0),
  basketTotalRate: state.basket.collection
    .map(itemRateMap)
    .reduce(basketReducer, 0)
    .toFixed(2),
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(categoriesActions.fetchCategories()),
  fetchClothes: () => dispatch(clothesActions.fetchClothes()),
  updateItem: (cloth_id, service_id, quantity, rate) =>
    dispatch(basketActions.updateItem(cloth_id, service_id, quantity, rate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
