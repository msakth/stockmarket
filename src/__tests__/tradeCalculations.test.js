import * as tradeCalculator from '../Utility/tradeCalculations';
import {DateConverter} from '../Utility/dateConverter';

describe('Trade Calculations testing', () => {

    const today = new Date();
    const yesterday = new Date().getTime() - 86400000; //86400000 - milliseconds in a day

    const trades = [{stockSymbol:'GIN', price: '30' , date: today , shares: 200},
                    {stockSymbol:'GIN', price: '20' , date: yesterday, shares: 300 }];
   
      const stock =  {"StockSymbol": "GIN", "Type": "Preferred", "LastDividend": 8, "FixedDividend": 2, "ParValue":100};

    it('should get the most recent price', () => {
        const expectedPrice = '30';
        const price = tradeCalculator.mostRecentPrice(trades, 'GIN');
        expect(expectedPrice).toEqual(price);
    });

    it('should calculate DividentYield', () => {
        const expectedDividendYield = '0.0667';
        const dividentYield = tradeCalculator.getDividentYield(stock, trades);
        expect(expectedDividendYield).toEqual(dividentYield);
    });

    it('should calculate P/ERatio', () => {
        const expectedPERatio = 0;
        const PERatio = tradeCalculator.getPERatio(stock, trades);
        expect(expectedPERatio).toEqual(PERatio);
    });

    it('should calculate GeometricMean', () => {
        const expectedGM = '300.0000';
        const GM = tradeCalculator.getGM(stock, trades);
        expect(expectedGM).toEqual(GM);
    });

    it('should calculate volume weighted stockprice', () => {
        const expectedVWSP = '24.0000';
        const VWSP = tradeCalculator.getVWAP(stock, trades);
        expect(expectedVWSP).toEqual(VWSP);
    });
})