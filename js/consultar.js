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
    const oGetAsset_ = await window.MasterOwnershipControl.methods.getAsset(
      oAddress.value
    ).call({from:window.coinbase, gasPrice:0}); // ToDo: Definir um GasPrice.

    oAddress.value        =oGetAsset_[0];
    oName.value           =oGetAsset_[1];
    oMail.value           =oGetAsset_[2];
    oCpf.value            =oGetAsset_[3];
    oAssetType.value      =oGetAsset_[4];
    oDescricaoCurta.value =oGetAsset_[5];
    oDescricaoLonga.value =oGetAsset_[6];
} catch (err) {
    alert("ERROR: Tentando 'Consultar' :\n\n"+err);
  }   
  oDivSpinner.style.display = "none";
  oDivButton.style.display = "";
}
