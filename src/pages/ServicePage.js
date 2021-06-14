import React from 'react';
import Toolbar from '../components/Toolbar';
import tw from '../lib/tailwind';
import {Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as categoriesActions from '../actions/categories';
import * as clothesActions from '../actions/clothes';
import ClothItem from '../components/ClothItem';
import Accordion from 'react-native-collapsible/Accordion';
import Button from '../components/Button';

function ServicePage(props) {

  React.useEffect(() => {
    props.fetchCategories();
    props.fetchClothes();
  }, []);

  const [activeSections, setActiveSections] = React.useState([]);

  const renderHeader = (category) => (
    <View style={tw``}>
      <View style={tw`flex flex-row items-center justify-between p-5`}>
        <Text style={tw`text-xl font-bold text-gray-700`}>
          {category.name}
        </Text>
        <View
          style={tw`rounded-full h-12 w-12 flex flex-row items-center justify-center bg-${category.color || 'blue'}-100`}>
          <Text style={tw`text-2xl`}>
            {category.emoji}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderContent = (category) => props.clothes.collection.map((cloth) =>
    <View key={cloth.id} style={tw`border-gray-200 border-t-2`}>
      <ClothItem cloth={cloth} key={cloth.id}/>
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
        <Button onPress={pressedAddToCart}>
          <View style={tw`py-2 px-3 flex flex-row items-center justify-between`}>
            <Text style={tw`text-white text-sm font-bold uppercase text-center tracking-wider`}>
              Add 7 items to basket
            </Text>
            <Text style={tw`text-sm font-bold text-white uppercase tracking-wider`}>
              $100
            </Text>
          </View>
        </Button>
      </View>
    </>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  clothes: state.clothes,
  service: state.service,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(categoriesActions.fetchCategories()),
  fetchClothes: () => dispatch(clothesActions.fetchClothes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
