import { DateConverter } from '../Utility/dateConverter';

import * as actions from '../../src/Actions/TradeListActions';
import { ActionTypes } from '../../src/Constants/ActionTypes';

describe('trade list actions', () => {

  it('should create an action to add a trade', () => {
    const payload = {stockSymbol: 'JOE', price: '20', shares: '200'}

    const expectedAction = {
      type: ActionTypes.tradeListTypes.ADD_TRADE,
      payload : {
          stockSymbol: 'JOE',
          price: '20',
          shares: '200',
          date: DateConverter().toStandardLongDateAnd24HrTimeDisplay(new Date())
        }
    };

    expect(actions.addTrade(payload)).toEqual(expectedAction);
  });

  it('should create an action to fetch trades', () => {
    const expectedAction = {
      type: ActionTypes.tradeListTypes.FETCH_TRADE
    };
    expect(actions.fetchTrades()).toEqual(expectedAction);
  });
});
