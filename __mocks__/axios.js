const axiosMock = jest.genMockFromModule('axios');

const mockResponse = {
    data: {
        "stocks" : [
            {"StockSymbol": "TEA"},
            {"StockSymbol": "POP"},
        ]
    }
};

axiosMock.get.mockImplementation(req);

function req() {
    return new Promise((resolve) => {
        axiosMock.delayTimer = setTimeout(() => {
                    resolve(mockResponse);
                }, 2000);
    });
}

module.exports = axiosMock;
