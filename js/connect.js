const contract_address = "0x94068ddf089019b542e5e1465b210467577750d6";

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
    window.MasterOwnershipControl = new web3.eth.Contract(contract_abi, contract_address);
    getCoinBase();
}

if (!ethEnabled()) {
    alert("Ethereum não detectado!");
} else {
    try {
        var oAccount = web3.eth.getAccounts();
        window.MasterOwnershipControl = new web3.eth.Contract(
            contract_abi, 
            contract_address
        );
        getCoinBase();
    } catch (err) {
        alert("ERROR: Tentando instanciar o 'web.eth.Contract' : "+err);
    }   
}
  
