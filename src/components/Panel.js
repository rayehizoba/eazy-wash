import React from 'react';
import {Text, View, Easing, Animated, Pressable} from 'react-native';
import tw from '../lib/tailwind';
import Space from './Space';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Panel(props) {

  const [expanded, setExpanded] = React.useState(props.expanded);

  const [expandedCollection, setExpandedCollection] = React.useState([
    {
      name: 'Sneakers',
      price: '40.99',
      quantity: 1,
    },
    {
      name: 'Evening Dress',
      price: '33.99',
      quantity: 0,
    },
    {
      name: 'Shorts',
      price: '5.99',
      quantity: 3,
    },
    {
      name: 'Kids Dress',
      price: '29.59',
      quantity: 0,
    },
    {
      name: 'Skirt',
      price: '6.59',
      quantity: 0,
    },
  ]);

  const height = React.useRef(new Animated.Value(0)).current;

  const [minHeight, setMinHeight] = React.useState(0);
  const [maxHeight, setMaxHeight] = React.useState(0);

  const pressedToggleExpanded = () => {
    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    setExpanded(!expanded);

    height.setValue(initialValue);
    Animated.timing(
      height,
      {
        toValue: finalValue,
        useNativeDriver: false,
        duration: 200,
        easing: Easing.inOut(Easing.cubic),
      },
    ).start();
  };

  const pressedIncrement = (index) => () => setQuantity(index, +1);

  const pressedDecrement = (index) => () => setQuantity(index, -1);

  const setQuantity = (index, value) => {
    const clone = expandedCollection.slice();
    clone[index].quantity += value;
    if (clone[index].quantity < 0) {
      clone[index].quantity = 0;
    }
    setExpandedCollection(clone);
  };

  const handleMinHeightLayout = (event) => {
    setMinHeight(event.nativeEvent.layout.height);
    height.setValue(event.nativeEvent.layout.height);
  };

  const handleMaxHeightLayout = (event) => {
    setMaxHeight(event.nativeEvent.layout.height);
  };

  const animatedStyle = [
    tw`border-2 border-gray-200 rounded-3xl`,
    minHeight > 0 && {height},
    minHeight > 0 && tw`overflow-hidden`,
  ];

  return (
    <Animated.View style={animatedStyle}>
      <View onLayout={handleMinHeightLayout}>
        <Pressable onPress={pressedToggleExpanded} android_ripple={{color: 'rgba(0,0,0,0.05)'}}>
          <View style={tw`flex flex-row items-center justify-between p-5`}>
            <Text style={tw`text-lg font-bold text-gray-700`}>
              {props.title}
            </Text>
            <View
              style={tw`rounded-full h-12 w-12 flex flex-row items-center justify-center bg-${props.emoji_color || 'blue'}-100`}>
              <Text style={tw`text-2xl`}>
                {props.emoji}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      {minHeight > 0 && <View onLayout={handleMaxHeightLayout}>
        {expandedCollection.map((each, loop) => (
          <View key={loop} style={tw`border-t-2 border-gray-200`}>
            <Space X={3} style={tw`px-5 py-4 flex flex-row items-center justify-between`}>
              <View style={tw``}>
                <Text style={tw`text-base font-bold text-gray-600`}>
                  {each.name}
                </Text>
                <Text style={tw`text-gray-400 text-xs font-semibold`}>
                  ${each.price}
                </Text>
              </View>
              <Space X={3} style={tw`flex flex-row items-center`}>
                <Pressable onPress={pressedDecrement(loop)} hitSlop={20} android_ripple={{borderless: true}}>
                  <Icon name='minus' style={tw`text-gray-400 text-2xl`}/>
                </Pressable>
                <Text style={tw.style(`text-lg font-semibold`, {
                  'text-gray-400': each.quantity === 0,
                  'text-gray-600': each.quantity > 0,
                })}>
                  {each.quantity}
                </Text>
                <Pressable onPress={pressedIncrement(loop)} hitSlop={20} android_ripple={{borderless: true}}>
                  <Icon name='plus' style={tw`text-gray-400 text-2xl`}/>
                </Pressable>
              </Space>
            </Space>
          </View>
        ))}
      </View>}
    </Animated.View>
  );
}

export default Panel;
