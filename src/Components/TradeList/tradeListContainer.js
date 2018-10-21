import React from 'react';
import {connect} from 'react-redux';

import TradeListComponent from './tradeListComponent'
import ErrorBoundary from '../../Error/ErrorBoundary';
import * as tradeListActions from '../../Actions/TradeListActions';

class TradeListContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchTrade();
  }

render() {
  return(
    <ErrorBoundary>
      <TradeListComponent trades={this.props.trades}/>
    </ErrorBoundary>
    );
  }
}

function mapStateToProps(state) {
  return{
      trades : state.TradeListReducer.trades
  }
}

function mapDispatchToProps(dispatch){
  return{
      fetchTrade : () => dispatch(tradeListActions.fetchTrades()),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TradeListContainer);
