import { StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';

export const textStyle = StyleSheet.create({
  body: {
    fontSize: s(12),
    fontWeight: 500,
  },
  title: { fontSize: s(20), fontWeight: '700', lineHeight: s(24) },
  hero: { fontSize: s(40), fontWeight: '700', lineHeight: s(48) },
});
