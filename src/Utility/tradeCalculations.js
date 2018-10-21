const fixedDecimalPlaces = 4;

// ToDoMS: JavaScript doesn't support decimals, only supports floating point which is always not accurate when handling financial data.
// To improve accuracy one possibility might be to scale all prices to the nearest 100 or 1000's before calculations 
// to get results more accurate. 

export const mostRecentPrice = (trades, stockSymbol) => {
    const filteredTradeForStockSymbol = trades.filter(trade => trade.stockSymbol === stockSymbol)
    const tradePrice = filteredTradeForStockSymbol.length > 0 ? filteredTradeForStockSymbol[0].price : 0;
    return tradePrice;
};

export const getDividentYield = (stock, trades) => {

  const type = stock.Type;
  const lastDividend = stock.LastDividend;
  const recentPrice = mostRecentPrice(trades, stock.StockSymbol);
  let dividentYield = 0;
  if( recentPrice > 0) {

    const fixedDividend = (stock.FixedDividend / 100).toFixed(fixedDecimalPlaces);
    const parValue = stock.ParValue;

   if( type === 'Common' ) {
        dividentYield = (lastDividend/recentPrice).toFixed(fixedDecimalPlaces);
   } else if( type === 'Preferred') {
    dividentYield = ((fixedDividend * parValue)/recentPrice).toFixed(fixedDecimalPlaces);
   }
  }

   return isNaN(dividentYield) ? 0 : dividentYield;
};

export const getPERatio = (stock, trades, dividentYield ) => {
  let peRatio = 0;
  if (dividentYield <= 0) return peRatio;
  const recentPrice = mostRecentPrice(trades, stock.StockSymbol);

  if( recentPrice > 0 ) {
    peRatio = (recentPrice/ dividentYield).toFixed(fixedDecimalPlaces);
  }

  return isNaN(peRatio) ? 0 : peRatio;
};

export const getGM = (stock, trades) => {
  const filteredTradePrices = trades.filter(trade => trade.stockSymbol === stock.StockSymbol).map(trade => trade.price);
  let GM = 0;
  if( filteredTradePrices.length > 0 ) {
    const priceForAllTrades = filteredTradePrices.reduce( (firstTradePrice, secondTradePrice) => firstTradePrice * secondTradePrice );
    GM = (priceForAllTrades / filteredTradePrices.length).toFixed(fixedDecimalPlaces);
  }

  return isNaN(GM) ? 0 : GM;
}

export const getVWAP = (stock, trades) => {
  const filteredTrades = trades.filter(trade => trade.stockSymbol === stock.StockSymbol);
  let VWAP = 0;
  if( filteredTrades.length > 0 ) {
    const allSharesAndSharePrices = filteredTrades.map(trade => trade.price * trade.shares);
    const sumOfPriceAndQuantity = allSharesAndSharePrices.reduce( (a, b) => a + b );

    const allQuantities = filteredTrades.map( trade => trade.shares ).map(Number);
    const sumOfQuantity = allQuantities.reduce((a, b) => a + b );

    VWAP = (sumOfPriceAndQuantity / sumOfQuantity).toFixed(fixedDecimalPlaces);
  }
  return isNaN(VWAP) ? 0 : VWAP;

}

export const getTradeCalculations = (stocks, trades) => {
  let tradeCalculations = stocks.map(stock => {

    const dividentYield = getDividentYield(stock, trades);

    const peRatio = getPERatio(stock, trades, dividentYield);

    const GM = getGM(stock, trades);

    const VWAP = getVWAP(stock, trades);

    return { stockSymbol: stock.StockSymbol, dividentYield, peRatio, GM, VWAP }
  });

  return tradeCalculations;
}
