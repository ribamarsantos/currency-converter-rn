import React from 'react';
import { View, FlatList, StatusBar, Text } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar translucent={false} barStyle="default" />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </View>
);

export default CurrencyList;
