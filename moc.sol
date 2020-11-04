pragma solidity ^0.7.0;
// SPDX-License-Identifier: MIT


// Fonte:
// https://kauri.io/remix-ide-your-first-smart-contract/124b7db1d0cf4f47b414f8b13c9d66e2/a

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

/*
contract HelloWorld {
    function get() public pure returns (string memory){
        return 'Hello Contracts';
    }
}
*/
/*
contract HelloWorld {

    string saySomething;

    constructor() {
        saySomething = "Hello World!";
    }

    function speak() public view returns(string memory) {
        return saySomething;
    }

    function saySomethingElse(string memory newSaying) public  returns(bool success) {
        saySomething = newSaying;
        return true;
    }

}
*/

contract MasterOwnershipControl {
    address oOwner;
    mapping(address => Asset) listAAsset;
    
    constructor() { oOwner = msg.sender; }
    
    function newAsset(
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public  { 
        Asset oAsset = new Asset(
            msg.sender,
            _sName,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
            );
        listAAsset[address(oAsset)] = oAsset;
    }
    
    function updateAsset(
        address memory _oOwner,
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public { 
        oOwner_ = getAssetByAddress(_oOwner);
        
        oOwner.updateAsset(
            _sName,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
        );
    }

    function getAssetByAddress(
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

    function getAsset(
    ) public view returns(string memory) {
        return (string(abi.encodePacked(
            iOwner,";",sName,";",sCPF,";",sShortDescription,";",sLongDescription
            )));
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

contract Asset {
    address iOwner;
    string sName;
    string sCPF;
    string sShortDescription;
    string sLongDescription;

    constructor (
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    )  { 
        iOwner = msg.sender;
        sName = _sName;
        sCPF = _sCPF;
        sShortDescription = _sShortDescription;
        sLongDescription = _sLongDescription;
    }
    
    function updateAsset(
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public { 
        sName = _sName;
        sCPF = _sCPF;
        sShortDescription = _sShortDescription;
        sLongDescription = _sLongDescription;
    }
    
    function getAsset(
    ) public view returns(string memory) {
        return (string(abi.encodePacked(
            iOwner,";",sName,";",sCPF,";",sShortDescription,";",sLongDescription
            )));
    }
}

