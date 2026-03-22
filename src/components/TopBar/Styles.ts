import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { s } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  isOver: {
    paddingTop: s(56),
  },
  isNotOver: {
    paddingTop: s(20),
  },
  menuTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  containerBar: {
    backgroundColor: colors.white,
    width: 'auto',
    paddingHorizontal: s(20),
    paddingVertical: s(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
