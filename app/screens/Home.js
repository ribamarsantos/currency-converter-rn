import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button/ClearButton';

const TEMP_BASE_CURRENCY = 'CAD';
const TEMP_QUOTE_CURRENCY = 'BRL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '283';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('base');
  };

  handlePressQuoteCurrency = () => {
    console.log('quote');
  };

  handleChange = (text) => {
    console.log('base', text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
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

        <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
      </Container>
    );
  }
}

export default Home;
