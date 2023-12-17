const web3 = require("./client");

const maticABI = require("./abi");

const maticAddress = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0";

// Talking to a contract in ethereum mainnet
async function init() {
  const contract = new web3.eth.Contract(maticABI, maticAddress);
  //   console.log(contract.methods);
  const tokenName = await contract.methods.name().call();
  const tokenSymbol = await contract.methods.symbol().call();
  const totalSupply = await contract.methods.totalSupply().call();
  const balanceOf = await contract.methods
    .balanceOf("0xCDCFaB82b9567e36394Cc72460459C19A260Bb67")
    .call();
  console.log(tokenName);
  console.log(tokenSymbol);
  //   console.log(totalSupply);
  console.log(balanceOf);
}

init();
