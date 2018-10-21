import React from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import * as stockActions from '../../Actions/StockActions';
import * as tradeListActions from '../../Actions/TradeListActions';
import StockComponent from './stockComponent';
import ErrorBoundary from '../../Error/ErrorBoundary';



class StockContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchStocks();
  }

  notify = () => toast.success("Trade added!");

  addTrade = async (trade) => {
    await this.props.addTrade(trade);
    this.notify();
  }

  render() {
    return(
      <ErrorBoundary>
        <StockComponent stocks={this.props.stocks} addTrade={this.addTrade} />
        <ToastContainer autoClose={1000}/>
      </ErrorBoundary>
    )
  }
}

function mapStateToProps(state) {
  return{
      stocks : state.StockReducer.stocks
  }
}

function mapDispatchToProps(dispatch){
  return{
      fetchStocks : () => dispatch(stockActions.fetchStocks()),
      addTrade : (trade) => dispatch(tradeListActions.addTrade(trade))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer);

