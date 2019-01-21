const HDWalletProvider = require("truffle-hdwallet-provider");
const privateKey = "privateKey";

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(privateKey, "https://rinkeby.infura.io/v3/7e117b973c8f4adab18449587b8c924a");
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
}
