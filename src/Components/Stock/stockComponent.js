import React from 'react';
import '../../Styles/stock.css';
import PropTypes from 'prop-types';

class StockComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { stockSymbol: '', price: '', shares: '' }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTrade(this.state);
    this.setState({stockSymbol: '', price: '', shares: ''});
  }

  handleOnChangeStockSymbol = (event) => {
    this.setState({stockSymbol: event.target.value});
  }

  handleOnChange = (event) => {
    const fieldName = event.target.name;
    if( fieldName === 'price' )  this.setState({price: event.target.value});
    if( fieldName === 'shares' )  this.setState({shares: event.target.value});
  }

  getStockSymbolsWithDefaultOption = (stockSymbols) => {
    const defaultOption = <option key={''} value=''>Select</option>;
    let stockOptions = stockSymbols.map((stockSymbol, index) => <option key={index} value={stockSymbol}>{stockSymbol}</option>);
    stockOptions.unshift(defaultOption);
    return stockOptions;
  }

  render() {
    const stockSymbols =  this.props.stocks.map(stock => stock.StockSymbol);
    const stockOptions = this.getStockSymbolsWithDefaultOption(stockSymbols);
    const{price, shares, stockSymbol} = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <React.Fragment>
          <div className="stock">
            <div className='panel panel-default'>
              <div className="panel-heading">
                <h2 className="panel-title">Add New Trade</h2>
              </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <label htmlFor="stockSymbol">Stock Symbol</label>
                    <select id="stockSymbol" name="stockSymbol" className="form-control" value={stockSymbol} onChange={this.handleOnChangeStockSymbol} required>
                      { stockOptions }
                    </select>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price" className="form-control" type="text" pattern="^[1-9]\d*(\.\d+)?$" value={price} onChange={this.handleOnChange} required maxLength={10} />
                    <small className="form-text text-muted pull-left">must contain only numbers or decimal numbers</small>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <label htmlFor="shares">No of shares</label>
                    <input id="shares" name="shares" className="form-control" type="text" pattern="[0-9]*" value={shares} onChange={this.handleOnChange} required maxLength={10}/>
                    <small className="form-text text-muted pull-left">must contain only numbers</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>

      </React.Fragment>
    </form>
    );
  }
}

StockComponent.propTypes = {
  stocks: PropTypes.array.isRequired
}

export default StockComponent;
