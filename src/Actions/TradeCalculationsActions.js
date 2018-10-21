import { getTradeCalculations } from '../Utility/tradeCalculations';
import {ActionTypes} from '../Constants/ActionTypes';


const tradeCalulationsSuccess = tradeCalculations => ({
  type: ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_SUCCESS,
  payload: { tradeCalculations }
});

const tradeCalulationsFailure = error => ({
  type: ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_FAILURE,
  payload: { error }
});

export const fetchTradeCalculationsAsync = () => {
    return (dispatch, getState) => {
      const stocks = getState().StockReducer.stocks;
      const trades = getState().TradeListReducer.trades;
      try{
        const tradeCalculations = trades.length > 0 ? getTradeCalculations(stocks, trades ) : [];
        dispatch(tradeCalulationsSuccess(tradeCalculations));
      }
      catch(error) {
        dispatch(tradeCalulationsFailure(error));
      }
    };
};
