const web3 = require("./client");

var url = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;

const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

// Function to find balance in web3 js
async function findAccountBalance(address) {
  const balance = await web3.eth.getBalance(address);
  const balanceInEther = web3.utils.fromWei(balance, "ether");
  console.log(balanceInEther);
}

// Function to create a account in web3 js
async function createAccount() {
  const account = await web3.eth.accounts.create();
  console.log(account);
}

// Connecting to local private network using web3 js
async function connectToPrivateNetwork() {
  // Connecting to local ganache network
  const web3 = new Web3("HTTP://127.0.0.1:7545");
  const accounts = await web3.eth.getAccounts();
  const balance = await web3.eth.getBalance(
    "0x1Ad63D4DC9d3A393Eac5Ed83755652309B035158"
  );
  const balanceInEther = web3.utils.fromWei(balance, "ether");
  console.log(accounts);
  console.log(balanceInEther + " ether");
}

// connectToPrivateNetwork();

findAccountBalance(address);
// createAccount();
