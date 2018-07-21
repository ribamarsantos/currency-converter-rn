import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePress = () => {
    this.props.navigation.goBack(null);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={this.handlePress}
              selected={item === TEMP_CURRENT_CURRENCY}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
