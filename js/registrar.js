async function runRegistrar () {
  var oAddress = document.getElementById("idAddress");
  var sName = document.getElementById("idNome").value;
  var sMail = document.getElementById("idEmail").value;
  var sCpf = document.getElementById("idCpf").value;
  var sDescricaoCurta = document.getElementById("idDescricaoCurta").value;
  var sDescricaoLonga = document.getElementById("idDescricaoLonga").value;
  var oDivSpinner = document.getElementById("idDivSpinner");
  var oDivButton = document.getElementById("idDivButton");
  var oAssetType = document.getElementById("idAssetType");
  var sAssetType = oAssetType.options[oAssetType.selectedIndex].value;


  console.log("crud: sAssetType = "+ sAssetType);
  if(
    sName === "" || 
    sMail === "" || 
    sCpf === "" || 
    sAssetType === "" ||
    sDescricaoCurta === "" ||
    sDescricaoLonga === ""
  ) {
    alert("ALERT: Campos mandatórios: Nome, eMail, CPF, Tipo de Assert, Descricao Curta e Descrição Longa !");
    return;
  }

  oDivSpinner.style.display = "";
  oDivButton.style.display = "none";
  try {
    getCoinBase();
    console.log("crud: L58:  Antes: = "+ "NewAsset()");
    const oNewAssetResult_ = await window.MasterOwnershipControl.methods.newAsset(
      sName,
      sMail,
      sCpf,
      sAssetType,
      sDescricaoCurta,
      sDescricaoLonga
    ).send({
      from:window.coinbase, 
      gasPrice:0                // ToDo: Definir um GasPrice.
    }); 

    oAddress.value=oNewAssetResult_["events"][0]["address"];
  } catch (err) {
    alert("ERROR: Tentando 'Registrar' :\n\n"+err);
  }   
  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";
  console.log("crud: oAddress.value = "+ oAddress.value);
}
