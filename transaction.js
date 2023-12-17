require("dotenv").config();
const { Web3 } = require("web3");

var url = "http://127.0.0.1:7545";

const web3 = new Web3(url);

const account1 = "0x47Ce02f9A014aE9C1E1D9133962c544b3E8b3D39";
const account2 = "0xF610d5c23c304e3BE16C13EA8B53595c6D53Ec46";

// Function to send balance from one account to another account. These accounts are unlocked, so we don't need to sign the transaction.
async function unsignedTransaction() {
  await web3.eth.sendTransaction({
    from: account1,
    to: account2,
    value: web3.utils.toWei("1", "ether"),
  });
}

async function signedTrasaction() {}

unsignedTransaction();
