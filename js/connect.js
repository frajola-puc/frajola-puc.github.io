const contract_address = 
"0x96a1ea04959f1c3f48045d693618f71c65b70969";

const ethEnabled = () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        return true;
    }
    return false;
}
  
if (!ethEnabled()) {
    alert("Ethereum não detectado!");
} else {
    try {
        var oAccounts = web3.eth.getAccounts();
        //_myDebug(oAccounts);
        window.MasterOwnershipControl = new web3.eth.Contract(
            contract_abi, 
            contract_address
        );
        //_myDebug(window.MasterOwnershipControl);
        getCoinBase();
    } catch (err) {
        alert("ERROR: Tentando instanciar o 'web.eth.Contract' : "+err);
    }   
}
  
async function getCoinBase () {
    window.coinbase = await window.web3.eth.getCoinbase();
};
  
