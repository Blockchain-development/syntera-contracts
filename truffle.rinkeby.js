require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

var rinkebyProvider = new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY);

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4,
      gas: 2100000
    }
  }
};