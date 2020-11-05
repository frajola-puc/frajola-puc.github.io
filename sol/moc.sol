pragma solidity ^0.7.0;
// SPDX-License-Identifier: MIT


// Fonte:
// https://kauri.io/remix-ide-your-first-smart-contract/124b7db1d0cf4f47b414f8b13c9d66e2/a

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

contract MasterOwnershipControl {
    address internal oAddress;
    uint internal uiRegistrationPrice;             //Preco de Registro
    mapping(address => Asset) internal mapAsset;   //Mapping Principal
    mapping (uint => address) internal mapAddress; //Busca pela Key
    mapping (string => address) internal mapCPF;   //Busca pelo CPF
    uint uiAssetCount;                             //Quantidade de Asset

    constructor() { oAddress = msg.sender; uiRegistrationPrice=10; uiAssetCount=0; }
    
    function newAsset(
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public payable newAssetCheck(uiRegistrationPrice) { 
        Asset oAsset = new Asset(
            msg.sender,
            _sName,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
            );
        mapAsset[address(oAsset)] = oAsset;
        mapAddress[uiAssetCount] = address(oAsset);
        //vAsset.push(oAsset);
        uiAssetCount+=1;
    }
    
    function updateAsset(
        address _oAddress,
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public updateAssetCheck(_oAddress) { 
        //Asset oAsset_ = listAsset[_oAddress];
        Asset oAsset_ = Asset(_oAddress);
        oAsset_.updateAsset(
            _sName,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
        );
    }
    
    modifier updateAssetCheck(address _oAddress) {
        address oAddress_ = mapAsset[_oAddress].getAddress();
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
                oAsset_.getCPF(),
                oAsset_.getShortDescription(),
                oAsset_.getLongDescription()
            )));
        }
        return (string(abi.encodePacked("")));
    }
    function getAssetByKey(
        uint _oAddress
    ) public view returns (
        string memory, 
        string memory, 
        string memory, 
        string memory
    ) {
        Asset oAsset_ = mapAsset[mapAddress[_oAddress]];
        if ( address(oAsset_) != address(0x00) ) {
            return (
                oAsset_.getName(),
                oAsset_.getCPF(),
                oAsset_.getShortDescription(),
                oAsset_.getLongDescription()
            );
        }
        return ("","","","");
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
}

contract Asset {
    address oAddress;
    string sName;
    string sCPF;
    string sShortDescription;
    string sLongDescription;
    
    event AssetUpdated(address oAddress_);

    constructor (
        address _oAddress,
        string memory _sName,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    )  { 
        oAddress = _oAddress;
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
        emit AssetUpdated(address(this));
    }

    function getAddress() public view returns(address) {
        return oAddress;
    }
    function getName() public view returns(string memory) {
        return sName;
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

