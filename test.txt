pragma solidity ^0.7.0;
// Fonte:
// https://kauri.io/remix-ide-your-first-smart-contract/124b7db1d0cf4f47b414f8b13c9d66e2/a
contract MasterOwnershipControl {
    Asset[] public vAsset;
    
    struct Asset {
        address iIdCreator;
        string sName;
        string sCPF;
        string sShortDescription;
        string sLongDescription;
    }
    
    constructor() public {}
    
    function newAsset(
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    //) public payable returns(uint256) { 
    ) public returns(uint256) { 
        Asset memory oAsset = new Asset(
            msg.sender,
            _sName,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
            );
        vAsset.push(oAsset);
        //return vAsset.length;
        return (address(oAsset));
    }
    
    function updateAsset(
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public returns(uint256) { 
        for (uint8 i = 0; i < vAsset.length; i++) {
            if (vAsset[i].sCPF == _sCPF) {
                vAsset[i].sName=_sName;
                vAsset[i].sCPF =_sCPF;
                vAsset[i].sShortDescription=_sShortDescription;
                vAsset[i].sLongDescription =_sLongDescription;
                return i;
            }
        }
        return -1;
    }
    
    function getAssetByCPF(
        string memory _sCPF
    ) public view returns(string memory) {
        for (uint8 i = 0; i < vAsset.length; i++) {
            if (vAsset[i].sCPF == _sCPF) {
                return (string(abi.encodePacked(
                    vAsset[i].sName,
                    vAsset[i].sCPF,
                    vAsset[i].sShortDescription,
                    vAsset[i].sLongDescription
                )));
            }
        }
        return ("");
    }
}
