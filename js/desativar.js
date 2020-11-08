async function runDesativar () {
  /*
  try {
    var sTest = await window.MasterOwnershipControl.methods.getAssetByKey().call();
    document.getElementById("idAddress").value = sTest;
  } catch (err) {
    alert("ERROR: Tentando executar um simples teste : "+err);
  } 
  */
  document.getElementById("idConsultar").disabled=true;
  document.getElementById("idDesativar").disabled=true;
}
