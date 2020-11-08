async function getInternalTest () {
  document.getElementById("idAddress").value = "123456";
};

async function getExternalTest () {
  try {
    var sTest = await window.MasterOwnershipControl.methods.runTest().call();
    document.getElementById("idAddress").value = sTest;
  } catch (err) {
    alert("ERROR: Tentando executar um simples teste : "+err);
  }   
}
