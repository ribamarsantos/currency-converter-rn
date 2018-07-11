import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerWidth);
    this.imageWidth = new Animated.Value(styles.$largeImageWidth);
  }
  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
    this.keyboardDidHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  render() {
    const containerImageStyles = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyles = [styles.image, { width: this.imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
export default Logo;
