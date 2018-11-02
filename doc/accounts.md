.getAccounts()
===
Get a list of trading accounts.

    const {getAccounts} = require('coinbase-pro')
    
    getAccounts()
      .then(console.log)
      .catch(console.error)

### API KEY PERMISSIONS
This endpoint requires either the “view” or “trade” permission.