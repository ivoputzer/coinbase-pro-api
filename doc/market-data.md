Market Data
===

The Market Data API is an `unauthenticated` set of endpoints for retrieving market data. These endpoints provide snapshots of market data.


## .getProducts()
Get a list of available currency pairs for trading.

    const {getProducts} = require('coinbase-pro')
    
    getProducts()
      .then(console.log)
      .catch(console.error)


    [
      {
        "id": "BTC-EUR",
        "base_currency": "BTC",
        "quote_currency": "EUR",
        "base_min_size": "0.001",
        "base_max_size": "10000.00",
        "quote_increment": "0.01"
      }
    ]