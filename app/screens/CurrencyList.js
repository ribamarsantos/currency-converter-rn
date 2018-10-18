import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const mapStateToPros = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const { primaryColor } = state.themes;
  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
  };
};
class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };
  render() {
    const {
      baseCurrency, quoteCurrency, navigation, primaryColor,
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={() => this.handlePress(item)}
              selected={item === comparisonCurrency}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default connect(mapStateToPros)(CurrencyList);
