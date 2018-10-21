import reducer from '../Reducers/tradeListReducer'
import { ActionTypes } from '../../src/Constants/ActionTypes'

describe('Tradelist reducer', () => {

  const initialState = {
    trades: []
  };

  it('should return the initial state for an action not matched', () => {
    expect(reducer( initialState, { type:'dummy'})).toEqual(
      {
        trades: []
      }
    )
  });

  it( 'should handle fetch trade', () => {
    expect( reducer( { trades: [{stockSymbol: "POP", price: '100', shares: '200'}]},
        {
          type: ActionTypes.tradeListTypes.ADD_TRADE,
          payload:  {stockSymbol: "JOE", price: '200', shares: '10000'}
        }
      )).toEqual(
        {
          trades: [ {stockSymbol: "JOE", price: '200', shares: '10000'},
                    {stockSymbol: "POP", price: '100', shares: '200'}
                  ]
        })
  });

  it( 'should handle add trade', () => {
      expect( reducer( { trades: []},
          {
            type: ActionTypes.tradeListTypes.ADD_TRADE,
            payload:  {stockSymbol: "JOE", price: '200', shares: '10000'}
          }
        )).toEqual(
          {
            trades: [{stockSymbol: "JOE", price: '200', shares: '10000'}]
          })
    });
});
