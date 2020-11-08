const contract_address = 
"0x1b87b14337949506705a9654e3f26a49e24b685b";

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
        //console.log("connect: L18: oAccount = "+oAccounts);
        //_myDebug(oAccounts);
        window.MasterOwnershipControl = new web3.eth.Contract(
            contract_abi, 
            contract_address
        );
        //console.log("connect: L23: window.MasterOwnershipControl = "+window.MasterOwnershipControl);
        //_myDebug(window.MasterOwnershipControl);
        getCoinBase();
    } catch (err) {
        alert("ERROR: Tentando instanciar o 'web.eth.Contract' : "+err);
    }   
}
  
async function getCoinBase () {
    window.coinbase = await window.web3.eth.getCoinbase();
    //console.log("connect: L32: window.coinbase = "+window.coinbase);
};
  
