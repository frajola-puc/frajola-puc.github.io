// Source:
// https://ethereum.stackexchange.com/questions/48668/how-to-store-hash-of-an-excel-file-in-blockchain
// https://github.com/gjeanmart/stackexchange/tree/master/48668-how-to-store-hash-of-an-excel-file-in-blockchain
async function runFile2Streamt () { //file in base64 and calculate the hash of the string sequence
  var fs = require('fs');
  var keccak256 = require('js-sha3').keccak256;

  var hash = hashFile('./txt/test.txt');
  console.log("HasFile : " + hash);
  
  function hashFile(file) {
      var body = fs.readFileSync(file);
      return keccak256(body.toString('base64'));
  }
};

function _myDebug(oObject_) {
  //console.clear();
  //console.log(oObject_);
  //console.log(oObject_.toSource);
  console.table(oObject_);
  //console.log(JSON.stringify(oObject_, null, 2));
  //console.log(JSON.stringify(oObject_));
  console.dir(oObject_);
}
