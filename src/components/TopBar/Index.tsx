import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import Texting from '../Texting/Index';
import { textStyle } from '../Texting/Styles';
import MenuIcon from '../../assets/icons/Menu.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import { s } from 'react-native-size-matters';

interface TopBarType {
  isOver?: boolean;
  title: React.ReactNode;
}

export default function TopBar({ isOver = false, title }: TopBarType) {
  return (
    <View
      style={[styles.containerBar, isOver ? styles.isOver : styles.isNotOver]}
    >
      <View style={styles.menuTitle}>
        <TouchableOpacity>
          <MenuIcon width={s(32)} height={s(32)} fill="red" />
        </TouchableOpacity>
        <Texting style={textStyle.title} textColor="black">
          {title}
        </Texting>
      </View>
      <TouchableOpacity>
        <SearchIcon width={s(32)} height={s(32)} />
      </TouchableOpacity>
    </View>
  );
}
