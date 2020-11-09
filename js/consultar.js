async function runConsultar () {
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
  } catch (err) {
    alert("ERROR: Tentando 'Consultar' :\n\n"+err);
  }   

  if(oGetAsset_[0] !== oAddress.value) {
    alert("ALERT: Contrato não encontrado !");
    oDivSpinner.style.display = "none";
    oDivButton.style.display = "";
    return;
  }

  oAddress.value        =oGetAsset_[0];
  oName.value           =oGetAsset_[1];
  oMail.value           =oGetAsset_[2];
  oCpf.value            =oGetAsset_[3];
  oAssetType.value      =oGetAsset_[4];
  oDescricaoCurta.value =oGetAsset_[5];
  oDescricaoLonga.value =oGetAsset_[6];

  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";

}
