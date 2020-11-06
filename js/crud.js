const contract_abi = 
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "runTest",
		"outputs": [
			{
				"internalType": "string",
				"name": "sTest_",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
;

const contract_address = "0xA361c58FA5D2631CB9c8122Ba43CD52fc2E53053";
//const contract_address = "0xeb591C7ad088f0B0D91eE2b529d82F355D786B87";
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
  
async function getInternalTest () {
    document.getElementById("idIndice").value = "123456";
};


async function getExternalTest () {
    var len = window.MasterOwnershipControl.methods.runTest().call().then((value) => {
        var input = document.getElementById("idIndice");
        input.value = value;
    });
};

/*
async function getExternalTest () {
    //alert("crud.js: L45: sGetTest = "+sGetTest);
    var sGetTest = await window.MasterOwnershipControl.methods.runTest().call();
    //alert("crud.js: L47: sGetTest = "+sGetTest);
    document.getElementById("idIndice").value = 
        await window.MasterOwnershipControl.methods.runTest().call();
    //alert("crud.js: L49: sGetTest = "+sGetTest);
};
async function getExternalTest () {
    alert("crud.js: L64: getExternalTest = ");
    var len = window.MasterOwnershipControl.methods.runTest().call().then((value) => {
        alert("crud.js: L66: value = "+value);
        var oIndice = document.getElementById("idIndice");
        alert("crud.js: L68: oIndice = "+oIndice);
        oIndice.value = value;
        alert("crud.js: L70: oIndice.value = "+oIndice.value);
    });
    alert("crud.js: L72: len = "+len);
}
*/
/*
async function runRegistrar () {
    var sIndice = document.getElementById("idIndice").value;
    var sNome = document.getElementById("idNome").value;
    var sMail = document.getElementById("idEmail").value;
    var sCpf = document.getElementById("idCpf").value;
    var sDescricaoCurta = document.getElementById("idDescricaoCurta").value;
    var sDescricaoLonga = document.getElementById("idDescricaoLonga").value;

    if(
        sIndice === "" || 
        sNome === "" || 
        sMail === "" || 
        sCpf === "" || 
        sDescricaoCurta === ""
    ) {
      alert("Campos Mandatorios: Nome, Email, CPF, e Descrição Curta.");
      return;
    }

//    alert("crud.js: L21: Aqui...");

//    alert("crud.js: L25: Aqui...");
    sIndice="Teste: FlavioSilva";
//    alert("crud.js: L25: Aqui...");
    sNome="Teste: FlavioSilva";
    sMail="Teste: flavioss@aluno.puc-rio.br";
    sCpf="Teste: 98295640704";
    sDescricaoCurta="Teste: Diamande Rosa";
    sDescricaoLonga="Teste: Diamande Rosa, descoberto na Russia...";

    alert("crud.js: L20: Aqui...");
    web3.eth.getAccounts().then(async (accounts) => {
        getCoinBase();
        alert("crud.js: L37: Accounts = "+accounts);
        return window.MasterOwnershipControl.methods.newAsset(
            sNome,
            sMail,
            sCpf,
            sDescricaoCurta,
            sDescricaoLonga
        ).send({from:window.coinbase});
    }).then((value) => {
        alert("crud.js: L62: Value = ", value);
        //var oIndice = document.getElementById("idIndice");
         oIndice.value = value;
       //oIndice.value = value["events"][0]["address"];
        alert("crud.js: L67: oIndice.value = "+oIndice.value);
        //oIndice.value.disabled = false;
    })
    alert("crud.js: L69: Aqui...");
    
}
*/
/*  
async function doAtualizaRegistro () {
    var regFederal = document.getElementById("inputRegistroFederal").value;
    var nomeDono = document.getElementById("inputNomeDono").value;
    var cpf = document.getElementById("inputCPF").value;
    var estado = document.getElementById("inputEstado").value;
    var endereco = document.getElementById("inputAddress").value;
    var addressContrato = document.getElementById("enderecoContrato").value;
    if(addressContrato === ""){
      alert("Campo de endereco vazio.");
      return;
    }
    if(regFederal === "" || nomeDono === "" || cpf === "" || estado === "" || endereco === "") {
      alert("Preencha todos os campos.");
      return;
    }

    web3.eth.getAccounts().then(async (accounts) => {
      getCoinBase();
      return window.RegistroImovel.methods.atualizaRegistro(addressContrato,regFederal,nomeDono,cpf,estado,endereco).send(
        {from:window.coinbase});
    }).then((value) => {
      alert("Registro atualizado");
    })
}
*/

if (!ethEnabled()) {
    alert("Ethereum não detectado!");
} else {
    //oAccount = web3.eth.getAccounts();
    //alert("crud: L151: oAccount = "+oAccount);
//    window.MasterOwnershipControl = new web3.eth.Contract(contract_abi, contract_address);
    window.MasterOwnershipControl = new web3.eth.Contract(
        contract_abi, 
        contract_address
    );
    //alert("crud: L157: Contract = "+window.MasterOwnershipControl);
    getCoinBase();
    //alert("crdu: L159: Contract = "+window.MasterOwnershipControl);
}
  
