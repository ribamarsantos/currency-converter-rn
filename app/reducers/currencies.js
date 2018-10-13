import { SWAP_CURRENCY, CHANGE_CURRENCY } from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  convertions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

console.log(initialState);

export default reducer;
