async function getInternalTest () {
    document.getElementById("idIndice").value = "123456";
};

async function getExternalTest () {
    try {
        var sTest = await window.MasterOwnershipControl.methods.runTest().call();
        document.getElementById("idIndice").value = sTest;
    } catch (err) {
        alert("ERROR: Tentando executar um simples teste : "+err);
    }   
}

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
      return;
    }

    web3.eth.getAccounts().then(async (accounts) => {
        getCoinBase();
        return window.MasterOwnershipControl.methods.newAsset(
            sNome,
            sMail,
            sCpf,
            sDescricaoCurta,
            sDescricaoLonga
        ).send({from:window.coinbase});
    }).then((value) => {
         oIndice.value = value;
    })
    
}

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
