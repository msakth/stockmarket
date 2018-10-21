import React from 'react';
import '../../Styles/trade.css';

class TradeCalculationsComponent extends React.PureComponent {

  getTradeCalculationRows = (stocks = []) => {
    return (stocks.length > 0)
           ? stocks.map((stock, index) =>
                <tr key={index}>
                    <td>{stock.stockSymbol}</td><td>{stock.dividentYield}</td><td>{stock.peRatio}</td><td>{stock.GM}</td><td>{stock.VWAP}</td>
                </tr>)
           : <tr><td colSpan="5">No Trades calculations to display</td></tr>
  }

  render() {
    const tradeCalulationRows = this.getTradeCalculationRows(this.props.tradeResults);

    return(
      <table id="trade">
        <thead>
          <tr>
            <th>Stock Symbol</th>
            <th>Dividend Yield</th>
            <th>P/E Ratio</th>
            <th>Geometric Mean</th>
            <th>Volume Weighted Stock Price</th>
          </tr>
        </thead>
        <tbody>
          { tradeCalulationRows }
        </tbody>
      </table>
    );
  }
}

export default TradeCalculationsComponent;
