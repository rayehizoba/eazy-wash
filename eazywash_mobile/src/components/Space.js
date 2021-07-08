import React from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

function Space({children, X, Y, ...restProps}) {
  let content = children;
  if (content && Array.isArray(children)) {
    content = children.map((child, loop) => {
      const styleX = 'ml-'+ (X || 0);
      const styleY = 'mt-'+ (Y || 0);
      const style = loop > 0 && tw`${styleX} ${styleY}`;
      return <View key={loop} style={style}>{child}</View>;
    });
  }
  return <View {...restProps}>{content}</View>;
}

export default Space;
