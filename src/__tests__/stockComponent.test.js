import React from 'react';
import {shallow, configure, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StockComponent from '../components/Stock/StockComponent';
import configureStore from '../Store/configureStore';
configure({ adapter: new Adapter() });


describe('Stock Component', () => {
  let mountedStockComponent;
  let stocks = [];

  beforeEach(() => {
    mountedStockComponent = shallow(<StockComponent stocks={stocks} />);
  });

  it('stock component renders without crashing', () => {
    shallow(<StockComponent stocks={stocks}/>);
  });

  it('should have methods handleSubmit, handleOnChangeStockSymbol, handleOnChange, getStockSymbolsWithDefaultOption', () => {
    expect(mountedStockComponent.instance().handleSubmit).toBeDefined();
    expect(mountedStockComponent.instance().handleOnChangeStockSymbol).toBeDefined();
    expect(mountedStockComponent.instance().handleOnChange).toBeDefined();
    expect(mountedStockComponent.instance().getStockSymbolsWithDefaultOption).toBeDefined();
  });

  it('should have states stockSymbol, price, shares', () => {
    expect(mountedStockComponent.state('stockSymbol')).toBeDefined();
    expect(mountedStockComponent.state('price')).toBeDefined();
    expect(mountedStockComponent.state('shares')).toBeDefined();
  });

  it('should render stocksymbols with default option', () => {
    const stocksWithStockSymbols = [
      {StockSymbol: 'POP'},
      {StockSymbol: 'JON'},
    ]
    const stockComponent = render(<StockComponent stocks={stocksWithStockSymbols} />);
    expect(stockComponent.find('option').length).toBe(3);
  });

  it('should set state for the selected stocksymbol', () => {
    const stocksWithStockSymbols = [
      {StockSymbol: 'POP'},
      {StockSymbol: 'JON'},
    ]
    const stockComponent = mount(<StockComponent stocks={stocksWithStockSymbols} />);
    stockComponent.find('select').simulate('change',{target: { value : 'JOE'}});
    expect(stockComponent.find('select').props().value).toBe("JOE");
    expect(stockComponent.instance().state.stockSymbol).toBe('JOE');
  });

  it('should set state for the given shares', () => {
    const stockComponent = mount(<StockComponent stocks={stocks} />);
    stockComponent.find('input#shares').getDOMNode().value = '23';
    stockComponent.find('input#shares').simulate('change');
    expect(stockComponent.instance().state.shares).toEqual('23');
  });

  it('should set state for the given price', () => {
    const stockComponent = mount(<StockComponent stocks={stocks} />);
    stockComponent.find('input#price').getDOMNode().value = '23.33';
    stockComponent.find('input#price').simulate('change');
    expect(stockComponent.instance().state.price).toEqual('23.33');
  });
});
