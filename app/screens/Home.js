import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const mapStateToProps = (state) => {
  const {
    baseCurrency, quoteCurrency, amount, conversions = {},
  } = state.currencies;
  const { primaryColor } = state.themes;
  const conversionSelector = conversions[baseCurrency];
  const { rates, isFetching, date } = conversionSelector;
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: date ? new Date(date) : new Date(),
    isFetching,
    primaryColor,
  };
};
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  };
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleChangeText = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      lastConvertedDate,
      isFetching,
      primaryColor,
    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }
    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            editable={false}
            textColor={primaryColor}
          />
          <LastConverted
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Home);
