require("dotenv").config();
const { Web3 } = require("web3");

var url = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;

const web3 = new Web3(url);

module.exports = web3;
