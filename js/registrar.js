async function runRegistrar () {
  var oAddress = document.getElementById("idAddress");
  var sNome = document.getElementById("idNome").value;
  var sMail = document.getElementById("idEmail").value;
  var sCpf = document.getElementById("idCpf").value;
  var sDescricaoCurta = document.getElementById("idDescricaoCurta").value;
  var sDescricaoLonga = document.getElementById("idDescricaoLonga").value;
  var oDivSpinner = document.getElementById("idDivSpinner");
  var oDivButton = document.getElementById("idDivButton");

  //    sAddress === "" || 
  console.log("crud: L32: sNome = "+sNome);
  if(
    sNome === "" || 
    sMail === "" || 
    sCpf === "" || 
    sDescricaoCurta === "" ||
    sDescricaoLonga === ""
  ) {
    alert("ALERT: Campos mandatórios: Nome, eMail, CPF, Tipo de Assert, Descricao Curta e Descrição Longa !");
    return;
  }
  /*
  console.log("crud: L43: sCpf = "+sCpf);
  console.log("crud: L45:  Timestamp = "+647);
  oAddress.value="vazio";
  sNome = "Flavio";
  sMail = "frajola@";
  sCpf = "982";
  sDescricaoCurta = "Diamante";
  sDescricaoLonga = "Diamante Rosa";
  */
  // console.log("crud: L51:  oAddress.value = "+ oAddress.value);
  // console.log("crud: L51:  sNome = "+ sNome);
  // console.log("crud: L51:  sMail = "+ sMail);
  // console.log("crud: L51:  sCpf = "+ sCpf);
  // console.log("crud: L51:  sDescricaoCurta = "+ sDescricaoCurta);
  // console.log("crud: L51:  sDescricaoLonga = "+ sDescricaoLonga);
  oDivSpinner.style.display = "";
  oDivButton.style.display = "none";
  try {
    //var oNewAsset = await window.MasterOwnershipControl.methods.runTest().call();
    getCoinBase();
    //var oNewAsset_ = await window.MasterOwnershipControl.methods.newAsset.call({
    console.log("crud: L58:  Antes: = "+ "NewAsset()");
    const oNewAssetResult_ = await window.MasterOwnershipControl.methods.newAsset(
      sNome,
      sMail,
      sCpf,
      sDescricaoCurta,
      sDescricaoLonga
    //).send({from:window.coinbase});
    ).send({
      from:window.coinbase, 
      gasPrice:0                // ToDo: Definir um GasPrice.
      //gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    }); 
    //_myDebug(oNewAssetResult_);
    /*
    console.log("======= oNewAssetResult_ ========");
    _myDebug(oNewAssetResult_);
    console.log("======= EVENTS ========");
    _myDebug(oNewAssetResult_["events"]);
    console.log("======= EVENTS[events][0] ========");
    _myDebug(oNewAssetResult_["events"][0]);
    console.log("======= EVENTS[events][0][event] ========");
    _myDebug(oNewAssetResult_["events"][0]["event"]);
    console.log("======= EVENTS[events][0][raw] ========");
    _myDebug(oNewAssetResult_["events"][0]["raw"]);
    console.log("======= EVENTS[events][0][returnValues] ========");
    _myDebug(oNewAssetResult_["events"][0]["returnValues"]);
    console.log("======= EVENTS[events][0][address] ========");
    _myDebug(oNewAssetResult_["events"][0]["address"]);
    //console.log("crud: L67:   value_[0] = "+  await oNewAssetResult_[0]);
    //console.log("crud: L67:   value_[0][0] = "+  await oNewAssetResult_[0][0]);
    //console.log("crud: L67:   value_[1] = "+  await oNewAssetResult_[0]);
    //console.log("crud: L67:   value_[][0][] = "+  await oNewAssetResult_["view"][0]["_oAssetAddress"]);
    //console.log("crud: L68:  oNewAsset = "+ await oNewAssetResult_);
    //oAddress.value = await oNewAssetResult_;
    */
    oAddress.value=oNewAssetResult_["events"][0]["address"];
  } catch (err) {
    alert("ERROR: Tentando 'Registrar' :\n\n"+err);
  }   
  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";
  console.log("crud: L72:  oAddress.value = "+ oAddress.value);
/*
        var coinbase = web3.eth.coinbase;
        var balance = web3.eth.getBalance(coinbase);        

        function getBalance() {
            document.getElementById("myBalance").innerText = balance;
        };
    _sName : sNome,
    _sEmail : sMail,
    _sCPF : sCpf,
    _sShortDescription : sDescricaoCurta,
    _sLongDescription : sDescricaoLonga
  try {
    //var sTest = await window.MasterOwnershipControl.methods.runTest().call();
    //document.getElementById("idAddress").value = sTest;
    console.log("crud: L62: getCoinBase() = "+getCoinBase);
    web3.eth.getAccounts().then(async (accounts) => {
      getCoinBase();
      console.log("crud: L65: getCoinBase() = "+getCoinBase);
      var oNewAsset = await window.MasterOwnershipControl.methods.newAsset(
        sNome,
        sMail,
        sCpf,
        sDescricaoCurta,
        sDescricaoLonga
      ).send({from:window.coinbase});
      console.log("crud: L73: oNewAsset = "+oNewAsset);
      return oNewAsset;
      //return await window.MasterOwnershipControl.methods.newAsset(
      //  sNome,
      //  sMail,
      //  sCpf,
      //  sDescricaoCurta,
      //  sDescricaoLonga
      //).send({from:window.coinbase});
    }).then((value_) => {
      //oAddress.value = value_["events"][0]["oAddress_"];
      console.log("crud: L84: value_ = "+value_);
      oAddress.value = value_;
      //var tmp = value_;
      //console.log("crud: L54: value_ = "+value_);
      //console.log("crud: L54: value[0] = "+value[0]);
      //console.log("crud: L54: value[0] = "+value["events"]);
      //console.log("crud: L54: value[0] = "+value["events"][0]);
      //console.log("crud: L54: value[0] = "+value["events"][0]["oAnddress_"]);
    })
  
   } catch (err) {
    alert("ERROR: Tentando executar o 'Registro' : "+err);
  }   
  console.log("crud: L97:  oAddress.value = "+ oAddress.value);
*/

/*
  try {
    console.log("crud: L43: getCoinBase() = "+getCoinBase);
    web3.eth.getAccounts().then(async (accounts) => {
    getCoinBase();
    console.log("crud: L46: getCoinBase() = "+getCoinBase);
    return window.MasterOwnershipControl.methods.newAsset(
      sNome,
      sMail,
//      "Diamante",
      sCpf,
      sDescricaoCurta,
      sDescricaoLonga
    ).send({from:window.coinbase});
    }).then((value) => {
      oAddress.value = value;
      console.log("crud: L54: value = "+value);
    })
  } catch (err) {
    alert("ERROR: Tentando executar o 'Registro' : "+err);
  }   
*/
}
