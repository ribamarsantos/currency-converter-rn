import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrency } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'CAD';
const TEMP_QUOTE_CURRENCY = 'BRL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '283';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.283;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleChange = (amount) => {
    console.log(changeCurrency(amount));
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  handleSwapCurrency = () => {
    console.log(swapCurrency());
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
            editable={false}
          />
          <LastConverted
            date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
