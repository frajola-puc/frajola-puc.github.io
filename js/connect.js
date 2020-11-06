const address = "0xd40D25F18267E60547555e251E5aDDe331807E35";
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
    window.MasterOwnershipControl = new web3.eth.Contract(abi, address);
    getCoinBase();
}
  