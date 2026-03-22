import React from 'react';
import { styles } from './Styles';
import Texting from '../../components/Texting/Index';
import TopBar from '../../components/TopBar/Index';
import { Image, TouchableOpacity, View } from 'react-native';
import { textStyle } from '../../components/Texting/Styles';
import LinearGradient from 'react-native-linear-gradient';

export default function HomePage() {
  return (
    <View style={styles.background}>
      <TopBar isOver title="AniDra" />
      <View>
        {/* IMAGE */}
        <Image
          source={require('../../assets/images/Hero.png')}
          style={styles.heroImage}
        />

        {/* Linear */}
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)', 'transparent']}
          style={styles.gradient}
        />

        {/* CONTENT */}
        <View style={styles.contentInformation}>
          <Texting style={textStyle.body}>FEATURED RELEASE</Texting>

          <Texting style={textStyle.hero}>CYBERPUNK</Texting>
          <Texting style={textStyle.hero}>RESONANCE</Texting>

          <Texting style={textStyle.body}>
            In a world where memories can be traded as currency...
          </Texting>
        </View>

        {/* CTA Button */}
        <View>
          <TouchableOpacity>Watch Now</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
