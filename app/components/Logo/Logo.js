import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.cotainer}>
    <Image
      resizeMode="contain"
      style={styles.cotainerImage}
      source={require('./images/background.png')}
    >
      <Image style={styles.image} source={require('./images/logo.png')} />
    </Image>
    <Text style={styles.text}> Currency Converter</Text>
  </View>
);

export default Logo;
