require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

var kovanProvider = new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/" + process.env.INFURA_API_KEY);

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: kovanProvider,
      network_id: 42,
      gas: 2100000
    }
  }
};