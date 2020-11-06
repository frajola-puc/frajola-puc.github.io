/*
const contract_address = "0xcf29e2ba50b94cc803dadddac7893ebbefc88a0a";
//const contract_address = "d40D25F18267E60547555e251E5aDDe331807E35";
const ethEnabled = () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
}
  
async function getCoinBase () {
    window.coinbase = await window.web3.eth.getCoinbase();
};
  
if (!ethEnabled()) {
    alert("Ethereum não detectado!");
} else {
    oAccount = web3.eth.getAccounts();
    //alert("connect: L20: oAccount = "+oAccount);
    window.MasterOwnershipControl = new web3.eth.Contract(contract_abi, contract_address);
//    alert("connect: L20: Contract = "+window.MasterOwnershipControl);
    getCoinBase();
}
*/