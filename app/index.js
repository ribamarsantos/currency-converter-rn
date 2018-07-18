import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Themes from './screens/Themes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryOrange: '#D57A66',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputtext: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});

export default () => <Themes />;
