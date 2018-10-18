export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY,
  amount: parseFloat(amount),
});

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency,
});

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency,
});
