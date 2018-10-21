import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchStocks} from '../../src/Actions/StockActions';
import { ActionTypes } from '../../src/Constants/ActionTypes'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Stock actions',()=> {

  it('should create FETCH_STOCKS_SUCCESS when fetching stocks has been done',()=> {

    const expectedActions = [
      {   type: ActionTypes.stockTypes.FETCH_STOCKS_SUCCESS,
          payload:  {"stocks":  [{"StockSymbol": "TEA"}, {"StockSymbol": "POP"}] }
      }
    ];

    const store = mockStore({ stocks: [] })

    return store.dispatch(fetchStocks()).then(() => {

      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
