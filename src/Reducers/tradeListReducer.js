import { ActionTypes } from '../Constants/ActionTypes';

const initialState = {
  trades: []
};

export default function TradeListReducer(state = initialState, action){
  switch (action.type) {
    case ActionTypes.tradeListTypes.ADD_TRADE:
      return {
        ...state,
        trades: [action.payload, ...state.trades]
      };
    case ActionTypes.tradeListTypes.FETCH_TRADE:
      return {
          trades: state.trades
      };

    default:
      return state;
  }
}
