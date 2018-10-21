import React from 'react';
import {connect} from 'react-redux';

import TradeCalculationsComponent from './tradeCalculationsComponent';
import * as tradeCalculationsActions from '../../Actions/TradeCalculationsActions';
import ErrorBoundary from '../../Error/ErrorBoundary';

class TradeCalculationsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchTradeCalculationsAsync();
  }

  render() {
    const tradeResults = this.props.tradeCalculationResults;
      return(
        <ErrorBoundary>
          <TradeCalculationsComponent tradeResults= {tradeResults} />
        </ErrorBoundary>
      );
  }
}

function mapStateToProps(state) {
  return{
    tradeCalculationResults : state.TradeCalculationsReducer.tradeCalculationResults
  }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchTradeCalculationsAsync : () => dispatch(tradeCalculationsActions.fetchTradeCalculationsAsync()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeCalculationsContainer);
