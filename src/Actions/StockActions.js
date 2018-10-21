import { ActionTypes } from '../Constants/ActionTypes';

import axios from 'axios';

const fetchStocksSuccess = stocks => ({
  type: ActionTypes.stockTypes.FETCH_STOCKS_SUCCESS,
  payload: { stocks }
});

const fetchStocksFailure = error => ({
  type: ActionTypes.stockTypes.FETCH_STOCKS_FAILURE,
  payload: { error }
});

export const fetchStocks =  () => {
  return dispatch => {
      return axios.get('http://localhost:3000/data/stocks.json')
                .then(res => {
                  dispatch(fetchStocksSuccess(res.data.stocks));
                })
                .catch(err => {
                  dispatch(fetchStocksFailure(err.message));
                });
  };
};
