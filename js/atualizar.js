async function runVisualizar () {
  var oAddress = document.getElementById("idAddress");
  var oName = document.getElementById("idNome");
  var oMail = document.getElementById("idEmail");
  var oCpf = document.getElementById("idCpf");
  var oAssetType = document.getElementById("idAssetType");
  var oDescricaoCurta = document.getElementById("idDescricaoCurta");
  var oDescricaoLonga = document.getElementById("idDescricaoLonga");
  var oDivSpinner = document.getElementById("idDivSpinner");
  var oDivButton = document.getElementById("idDivButton");
  var oGetAsset_ = null;

  console.log("crud: oAddress.value = "+oAddress.value);
  if(
    oAddress.value === ""
  ) {
    alert("ALERT: Campos mandatórios: Chave Identificadora !");
    return;
  }
  oDivSpinner.style.display = "";
  oDivButton.style.display = "none";
  try {
    getCoinBase();
    oGetAsset_ = await window.MasterOwnershipControl.methods.getAsset(
      oAddress.value
    ).call({from:window.coinbase, gasPrice:0}); // ToDo: Definir um GasPrice.
    //_myDebug(oNewAssetResult_);
  } catch (err) {
    alert("ERROR: Tentando executar uma 'Consulta' :\n\n"+err);
  }

  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";

  if(oGetAsset_[0] !== oAddress.value) {
    alert("ALERT: Contrato não encontrado !");
    return;
  }

  oAddress.value        =oGetAsset_[0];
  oName.value           =oGetAsset_[1];
  oMail.value           =oGetAsset_[2];
  oCpf.value            =oGetAsset_[3];
  oAssetType.value      =oGetAsset_[4];
  oDescricaoCurta.value =oGetAsset_[5];
  oDescricaoLonga.value =oGetAsset_[6];

  document.getElementById("idButtonVisualizar").style.display = "none";
  document.getElementById("idButtonRecomecar").style.display = "";
  document.getElementById("idButtonModificar").style.display = "";

  oAddress.disabled=true;
  oName.disabled=false;
  oMail.disabled=false;
  oCpf.disabled=false;
  oAssetType.disabled=false;
  oDescricaoCurta.disabled=false;
  oDescricaoLonga.disabled=false;
}

async function runAtualizar () {
  var oAddress = document.getElementById("idAddress");
  var oName = document.getElementById("idNome");
  var oMail = document.getElementById("idEmail");
  var oCpf = document.getElementById("idCpf");
  var oAssetType = document.getElementById("idAssetType");
  var oDescricaoCurta = document.getElementById("idDescricaoCurta");
  var oDescricaoLonga = document.getElementById("idDescricaoLonga");
  var oDivSpinner = document.getElementById("idDivSpinner");
  var oDivButton = document.getElementById("idDivButton");
  var sAssetType = oAssetType.options[oAssetType.selectedIndex].value;

  if(
    oName.value === "" || 
    oMail.value === "" || 
    oCpf.value === "" || 
    sAssetType === "" ||
    oDescricaoCurta.value === "" ||
    oDescricaoLonga.value === ""
  ) {
    alert("ALERT: Campos mandatórios: Nome, eMail, CPF, Tipo de Assert, Descricao Curta e Descrição Longa !");
    return;
  }
  oDivSpinner.style.display = "";
  oDivButton.style.display = "none";
  try {
    getCoinBase();
    const oUpdateAsset_ = await window.MasterOwnershipControl.methods.updateAsset(
      oAddress.value,
      oName.value,
      oMail.value,
      oCpf.value,
      sAssetType,
      oDescricaoCurta.value,
      oDescricaoLonga.value
    ).send({
      from:window.coinbase, 
      gasPrice:0                // ToDo: Definir um GasPrice.
      //gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });     //_myDebug(oNewAssetResult_);
} catch (err) {
    alert("ERROR: Tentando 'Atualizar' :\n\n"+err);
  }   
  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";

  /*
  var sUpdateAsset_= oUpdateAsset_["events"][0]["address"];
  if(
    sAddress.valueOf() != sUpdateAsset_.valueOf()
  ) {
    alert("ERROR: Inconsistencia ao 'Atualizar':\n\n"+sUpdateAsset_);
    return;
  }
  alert("SUCESSO: O contrato foi atualizado ");
  */

  document.getElementById("idButtonVisualizar").style.display = "none";
  document.getElementById("idButtonRecomecar").style.display = "";
  document.getElementById("idButtonModificar").style.display = "none";

  oAddress.disabled=true;
  oName.disabled=true;
  oMail.disabled=true;
  oCpf.disabled=true;
  oAssetType.disabled=true;
  oDescricaoCurta.disabled=true;
  oDescricaoLonga.disabled=true;
}

async function runRecomecar () {
  var oAddress = document.getElementById("idAddress");
  var oName = document.getElementById("idNome");
  var oMail = document.getElementById("idEmail");
  var oCpf = document.getElementById("idCpf");
  var oAssetType = document.getElementById("idAssetType");
  var oDescricaoCurta = document.getElementById("idDescricaoCurta");
  var oDescricaoLonga = document.getElementById("idDescricaoLonga");

  document.getElementById("idDivSpinner").value="";
  document.getElementById("idDivButton").value="";

  document.getElementById("idButtonVisualizar").style.display = "";
  document.getElementById("idButtonRecomecar").style.display = "none";
  document.getElementById("idButtonModificar").style.display = "none";

  oAddress.value="";
  oName.value="";
  oMail.value="";
  oCpf.value="";
  oAssetType.value="";
  oDescricaoCurta.value="";
  oDescricaoLonga.value="";

  oAddress.disabled=false;
  oName.disabled=true;
  oMail.disabled=true;
  oCpf.disabled=true;
  oAssetType.disabled=true;
  oDescricaoCurta.disabled=true;
  oDescricaoLonga.disabled=true;
}
