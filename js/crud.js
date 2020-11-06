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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
;
const contract_address = "0xf5feaf5825b34e354b3fd38375a8df97419490c4";
//const contract_address = "0xe5d890353e0160b0ab5a8fb898e4e1de46032cdd";
//const contract_address = "0xeb591C7ad088f0B0D91eE2b529d82F355D786B87";
const ethEnabled = () => {
    if (window.ethereum) {
      //alert("crud: L28: ethEnabled : ");

      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      //alert("crud: L28: ethEnabled = true.");
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
      //alert("crud: L49: value : "+value);
      input.value = value;
    });
}

/*
async function getExternalTest () {
    document.getElementById("idIndice").value = "MAICON";
    alert("crud: L45: getExternalTest : "+"Inicio");
    try {
        alert("crud: L47: Antes : "+"runTest()");
        var sTest = await window.MasterOwnershipControl.methods.runTest().call();
        alert("crud: L49: Depois : "+"runTest()");
        alert("crud.js: L50: sGetTest = "+sTest);
        document.getElementById("idIndice").value = sTest;
        //    await window.MasterOwnershipControl.methods.runTest().call();
//        alert("crud: L53: document.getElementById("idIndice").value : "+
//            document.getElementById("idIndice").value;
    } catch (err) {
        alert("ERROR: Tentando executar um simples teste : "+err);
    }   
    alert("crud: L56: getExternalTest : "+"Fim");
}
*/
/*
async function getExternalTest () {
    alert("crud: L45: getExternalTest : "+"Inicio");
    try {
        alert("crud: L47: Antes : "+"runTest()");
        var len = window.MasterOwnershipControl.methods.runTest().call().then((value) => {
            var input = document.getElementById("idIndice");
            input.value = value;
        });
        alert("crud: L52: Depois : "+"runTest()");
        alert("crud: L52: len : "+len);
        alert("crud: L52: input.value : "+input.value);
    } catch (err) {
        alert("ERROR: Tentando executar um simples teste : "+err);
    }   
    alert("crud: L56: getExternalTest : "+"Fim");
}
async function getExternalTest () {
    //alert("crud.js: L45: sGetTest = "+sGetTest);
    var sGetTest = await window.MasterOwnershipControl.methods.runTest().call();
    //alert("crud.js: L47: sGetTest = "+sGetTest);
    document.getElementById("idIndice").value = 
        await window.MasterOwnershipControl.methods.runTest().call();
    //alert("crud.js: L49: sGetTest = "+sGetTest);
}
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
    try {
        //var oAccount = await web3.eth.getAccounts();
        var oAccount = web3.eth.getAccounts();
        /*
        var oAccount;
        web3.eth.getAccounts().then((accounts) => {
            alert("crud: L166: accounts[0] = "+accounts[0]);
            oAccount = accounts[0];
        })
        */
        //alert("crud: L166: oAccount = "+oAccount);
    //    window.MasterOwnershipControl = new web3.eth.Contract(contract_abi, contract_address);
        window.MasterOwnershipControl = new web3.eth.Contract(
            contract_abi, 
            contract_address
        );
        //alert("crud: L175: window.MasterOwnershipControl = "+window.MasterOwnershipControl);
        getCoinBase();
        //alert("crdu: L159: Contract (Maicon)= "+window.MasterOwnershipControl);
    } catch (err) {
        alert("ERROR: Tentando instanciar o 'web.eth.Contract' : "+err);
    }   
    //alert("crud: L182: ethEnaled=OK");
}
  
