import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Styles/app.css';
import Header from './Components/header';
import StockContainer from './Components/Stock/stockContainer';
import TradeListContainer from './Components/TradeList/tradeListContainer';
import TradeCalculationsContainer from './Components/TradeCalculations/tradeCalculationsContainer';


const Routes = ({store}) => (

    <Provider store={store}>
    <Router>
    <div className="app-container" >
      <Header/>
      <Route exact path="/" component={StockContainer} />
      <Route path="/tradelist" component={TradeListContainer} />
      <Route path="/tradeCalculations" component={TradeCalculationsContainer} />
    </div>
  </Router>
  </Provider>
)

Routes.propTypes = {
    store: PropTypes.object.isRequired
}


export default Routes
