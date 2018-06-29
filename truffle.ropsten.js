require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

var ropstenProvider = new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY);

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 4,
      gas: 2100000
    }
  }
};