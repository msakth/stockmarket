import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/trade.css';

class TradeListComponent extends React.PureComponent {

  getTradeRows = (trades = []) => {
    return (trades.length > 0)
        ? trades.map((trade, index) => <tr key={index}>
                                        <td>{trade.date}</td><td>{trade.stockSymbol}</td><td>{trade.price}</td><td>{trade.shares}</td>
                                       </tr>)
        : <tr><td colSpan="4">No Trades to display</td></tr>
  }

  render() {

    const tradeRows = this.getTradeRows(this.props.trades);

    return(
      <table id="trade">
        <thead>
          <tr>
            <th>Trade Date</th>
            <th>Stock Symbol</th>
            <th>Price</th>
            <th>Number of Shares</th>
          </tr>
        </thead>
        <tbody>
          { tradeRows }
        </tbody>
      </table>
    );
  }
}

TradeListComponent.propTypes = {
  trades: PropTypes.array.isRequired
}

export default TradeListComponent;
