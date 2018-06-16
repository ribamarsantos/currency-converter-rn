import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Container = ({ children }) => <View>{children}</View>;

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
