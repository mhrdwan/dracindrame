import { View, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { TypeColor } from '../../assets/colors';
import { textStyle } from './Styles';

interface TypeText {
  style?: StyleProp<TextStyle>;
  textColor?: keyof TypeColor;
  children: React.ReactNode;
}

export default function Texting({
  style = textStyle.body,
  textColor = 'white',
  children,
}: TypeText) {
  return (
    <View>
      <Text style={[{ color: textColor }, style]}>{children}</Text>
    </View>
  );
}
