pragma solidity ^0.7.0;
// SPDX-License-Identifier: MIT


// Fonte:
// https://kauri.io/remix-ide-your-first-smart-contract/124b7db1d0cf4f47b414f8b13c9d66e2/a

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

// PersonalToken=14a3b4207599f2b66de9cfa197e33204a43b50ed
// MetamaskToken=0xeb591C7ad088f0B0D91eE2b529d82F355D786B87
// Account=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 (MIT)

contract MasterOwnershipControl {
    address internal oAddress;
    uint internal uiRegistrationPrice;             //Preco de Registro
    mapping(address => Asset) internal mapAsset;   //Mapping Principal
    mapping (uint => address) internal mapAddress; //Busca pela Key
    mapping (string => address) internal mapCPF;   //Busca pelo CPF
    uint uiAssetCount;                             //Quantidade de Asset

    event AssetEvent(address oAddress_);

    constructor() { oAddress = msg.sender; uiRegistrationPrice=10; uiAssetCount=0; }
    
    function newAsset(
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    //) public payable newAssetCheck(uiRegistrationPrice) { 
    ) public { 
        Asset oAsset_ = new Asset(
            msg.sender,
            _sName,
            _sEmail,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
            );
        mapAsset[address(oAsset_)] = oAsset_;
        mapAddress[uiAssetCount] = address(oAsset_);
        //vAsset.push(oAsset);
        uiAssetCount+=1;

        emit AssetEvent(address(oAsset_));
    }
    
    function updateAsset(
        uint _uiAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    //) public updateAssetCheck(_uiAddress) { 
    ) public { 
//        Asset oAsset_ = listAsset[_oAddress];
        Asset oAsset_ = mapAsset[mapAddress[_uiAddress]];
//        Asset oAsset_ = Asset(_oAddress);
        oAsset_.updateAsset(
            _sName,
            _sEmail,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
        );
        emit AssetEvent(address(oAsset_));
    }
    
    modifier updateAssetCheck(uint _uiAddress) {
        address oAddress_ = mapAsset[mapAddress[_uiAddress]].getAddress();
        require(oAddress_ != address(0x00), "There isn't this contract!");
        require(msg.sender == oAddress_, "Unauthorized operation!");
         _;
    }
    modifier newAssetCheck(uint _uiRegistrationPrice) {
        if (msg.value >= uiRegistrationPrice) {
         _;
        }
    }
    modifier onlyMocOwner {  //MOC = MasterOwnershipControl
      require(msg.sender == oAddress, "Unauthorized operation!");
      _;
    }

    function getAssetByCPF(
        string memory _sCPF
    ) public view returns (string memory) {
        Asset oAsset_ = mapAsset[mapCPF[_sCPF]];
        if ( address(oAsset_) != address(0x00) ) {
            return (string(abi.encodePacked(
                oAsset_.getName(),
                oAsset_.getEmail(),
                oAsset_.getCPF(),
                oAsset_.getShortDescription(),
                oAsset_.getLongDescription()
            )));
        }
        return (string(abi.encodePacked("")));
    }
    function getAssetByKey(
        uint _uiAddress
    ) public view returns (
        string memory, 
        string memory, 
        string memory,
        string memory, 
        string memory
    ) {
        Asset oAsset_ = mapAsset[mapAddress[_uiAddress]];
        if ( address(oAsset_) != address(0x00) ) {
            return (
                oAsset_.getName(),
                oAsset_.getEmail(),
                oAsset_.getCPF(),
                oAsset_.getShortDescription(),
                oAsset_.getLongDescription()
            );
        }
        return ("","","","","");
    }
    /*
    function getAssetByCPF(
        string memory _sCPF
    ) public view returns (string memory) {
        //for (uint8 i = 0; i < vAsset.length; i++) {
        for (uint8 i = 0; i < uiAssetCount ; i++) {
            //Asset oAsset_ = vAsset[i];
            Asset oAsset_ = mapAsset[mapAddress[i]];
            if (
                //oAsset_.getCPF() == _sCPF) {
                keccak256(bytes(oAsset_.getCPF())) == keccak256(bytes(_sCPF)) ) {
                //Asset oAsset_ = vAsset[i];
                return (string(abi.encodePacked(
                    oAsset_.getName(),
                    oAsset_.getCPF(),
                    oAsset_.getShortDescription(),
                    oAsset_.getLongDescription()
                )));
            }
        }
        return ("");
    }
    */
    function changePrice(uint _uiRegistrationPrice) public onlyMocOwner {
      uiRegistrationPrice = _uiRegistrationPrice;
    }
    
    //function getAddress() public view returns (address) {
    //    return oAddress;
    //}
    
    //function getTest() public view returns (string memory) {
    //    return "Test: Sucesso!";
    //}
    function testGetMainContractAddress() public view returns (address) {
        return address(this);
    }
}

contract Asset {
    address oAddress;
    string sName;
    string sEmail;
    string sCPF;
    string sShortDescription;
    string sLongDescription;
    
    //event AssetUpdated(address oAddress_);

    constructor (
        address _oAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    )  { 
        oAddress = _oAddress;
        sName = _sName;
        sEmail = _sEmail;
        sCPF = _sCPF;
        sShortDescription = _sShortDescription;
        sLongDescription = _sLongDescription;
    }
    
    function updateAsset(
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public { 
        sName = _sName;
        sEmail = _sEmail;
        sCPF = _sCPF;
        sShortDescription = _sShortDescription;
        sLongDescription = _sLongDescription;
        //emit AssetUpdated(address(this));
    }

    function getAddress() public view returns(address) {
        return oAddress;
    }
    function getName() public view returns(string memory) {
        return sName;
    }
    function getEmail() public view returns(string memory) {
        return sEmail;
    }
    function getCPF() public view returns(string memory) {
        return sCPF;
    }
    function getShortDescription() public view returns(string memory) {
        return sShortDescription;
    }
    function getLongDescription() public view returns(string memory) {
        return sLongDescription;
    }
/*    
    function getAsset(
    ) public view returns(string memory) {
        return (string(abi.encodePacked(
            iOwner,";",sName,";",sCPF,";",sShortDescription,";",sLongDescription
            )));
    }
*/
}

