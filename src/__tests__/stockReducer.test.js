import reducer from '../Reducers/stockReducer'
import { ActionTypes } from '../../src/Constants/ActionTypes'

describe('stock reducer', () => {

  const initialState = {
    stocks: [],
    error: null
  };

  it('should return the initial state for an action not matched', () => {
    expect(reducer( initialState, { type:'dummy'})).toEqual(
      {
        stocks: [],
        error: null
      }
    )
  });

  it( 'should handle stock success', () => {
    expect( reducer( [],
          {
            type: ActionTypes.stockTypes.FETCH_STOCKS_SUCCESS,
            payload: {stocks: [{stockSymbol: "JOE"}]  }
          }
        )).toEqual(
          {
            stocks: [{stockSymbol: "JOE"}],
            error: null
          })
  });

  it( 'should handle stock failure', () => {
    expect( reducer( [],
          {
            type: ActionTypes.stockTypes.FETCH_STOCKS_FAILURE,
            payload: { error: 'dummy error'  }
          }
        )).toEqual(
          {
            error: 'dummy error'
          })
  });

});
