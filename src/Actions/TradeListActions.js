import { ActionTypes } from '../Constants/ActionTypes';
import { DateConverter } from '../Utility/dateConverter';

export const addTrade = ({stockSymbol, price, shares}) => ({
  type: ActionTypes.tradeListTypes.ADD_TRADE,
  payload: {
      stockSymbol,
      price,
      shares,
      date: DateConverter().toStandardLongDateAnd24HrTimeDisplay(new Date())
    }
});

export const fetchTrades = () => ({
  type: ActionTypes.tradeListTypes.FETCH_TRADE
});
