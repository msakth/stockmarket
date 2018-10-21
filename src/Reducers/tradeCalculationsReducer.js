import { ActionTypes } from '../Constants/ActionTypes';

const initialState = {
  tradeCalculationResults: [],
  error: null
};

export default function TradeCalculationsReducer(state=initialState, action){
  switch (action.type) {
    case ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        tradeCalculationResults: action.payload.tradeCalculations
      };
    case ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
