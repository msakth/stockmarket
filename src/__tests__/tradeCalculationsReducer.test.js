import reducer from '../Reducers/tradeCalculationsReducer'
import { ActionTypes } from '../../src/Constants/ActionTypes'

describe('TradeCalculations reducer', () => {

  const initialState = {
    tradeCalculationResults: [],
    error: null
  };

  it('should return the initial state for an action not matched', () => {
    expect(reducer( initialState, { type:'dummy'})).toEqual(
      {
        tradeCalculationResults: [],
        error: null
      }
    )
  });


  it( 'should handle trade calculations success', () => {
    expect( reducer( [],
          {
            type: ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_SUCCESS,
            payload: {tradeCalculations: [{stockSymbol: "JOE", dividentYield: '0.123', peRatio: '1.23'}]  }
          }
        )).toEqual(
          {
            tradeCalculationResults: [{stockSymbol: "JOE", dividentYield: '0.123', peRatio: '1.23'}],
            error: null
          })
  });

  it( 'should handle trade calculations failure', () => {
      expect( reducer( [],
          {
            type: ActionTypes.tradeCalculationsTypes.COMPLETE_TRADE_CALCULATIONS_FAILURE,
            payload: { error: 'dummy error'  }
          }
        )).toEqual(
          {
            error: 'dummy error'
          })
  });

});
