import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { s } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentInformation: {
    position: 'absolute',
    bottom: s(240),
    paddingHorizontal: s(20),
  },
});
