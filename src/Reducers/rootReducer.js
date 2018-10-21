// 3rd Party References
import { combineReducers } from 'redux';

import StockReducer from './stockReducer';
import TradeListReducer from './tradeListReducer';
import TradeCalculationsReducer from './tradeCalculationsReducer';

const rootReducer = combineReducers({
    StockReducer,
    TradeListReducer,
    TradeCalculationsReducer
});

export default  rootReducer;
