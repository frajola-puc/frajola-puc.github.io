 
async function runRegistrar () {
    var sNome = document.getElementById("idNome").value;
    var sMail = document.getElementById("idEmail").value;
    var sCpf = document.getElementById("idCpf").value;
    var sDescricaoCurta = document.getElementById("idDescricaoCurta").value;
    var sDescricaoLonga = document.getElementById("idDescricaoLonga").value;

    if(
        idNome === "" || 
        idEmail === "" || 
        idCpf === "" || 
        idDescricaoCurta === ""
    ) {
      alert("Campos Mandatorios: Nome, Email, CPF, e Descrição Curta.");
      return;
    }

    web3.eth.getAccounts().then(async (accounts) => {
        getCoinBase();

        alert("crud.js: L22: Aqui...");
        return window.MasterOwnershipControl.methods.newAsset(
            sNome,
            sMail,
            sCpf,
            sDescricaoCurta,
            sDescricaoLonga
        ).send({
            from:window.coinbase
        });
    }).then((value) => {
        alert("crud.js: L34: Aqui...");
        var sIndice = document.getElementById("idIndice");
        sIndice.value = value["events"][0]["oAddress_"];
        alert("crud.js: L36: Aqui...");

        sIndice.value.disabled = false;
    })
}
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
