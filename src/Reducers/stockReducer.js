import { ActionTypes } from '../Constants/ActionTypes';

const initialState = {
  stocks: [],
  error: null
};

export default function StockReducer(state=initialState, action) {
  switch (action.type) {
    case ActionTypes.stockTypes.FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        error: null,
        stocks: action.payload.stocks
      };
    case ActionTypes.stockTypes.FETCH_STOCKS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
