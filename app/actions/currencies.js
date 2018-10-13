export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY,
  amount: parseFloat(amount),
});
