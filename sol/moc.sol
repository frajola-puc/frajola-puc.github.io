pragma solidity ^0.7.0;
// SPDX-License-Identifier: MIT

//0xeb591C7ad088f0B0D91eE2b529d82F355D786B87

// PersonalToken=14a3b4207599f2b66de9cfa197e33204a43b50ed
// MetamaskToken=0xeb591C7ad088f0B0D91eE2b529d82F355D786B87
// Account=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 (MIT)


contract MasterOwnershipControl {
    address internal oMasterOwner;
    uint    internal uiRegistrationPrice;               //Preco de Registro
    uint    internal uiEth;                             //uiEth ~= 10 usd
    uint    internal uiGas;                             //uiGas ~= (Gas * 10.000.000) * uiEth
    mapping(address => Asset) internal mapAddressActive; //Mapping Principal
    mapping(address => Asset) internal mapOwnerActive; //Mapping Principal
    mapping(string => Asset)  internal mapCpfActive;  //Busca pelo CPF
    mapping(address => Asset) internal mapAddressInactive; //Mapping Principal
    mapping(address => Asset) internal mapOwnerInactive; //Mapping Principal
    mapping(string => Asset)  internal mapCpfInactive;  //Busca pelo CPF

    //event AssetEvent(address oOwner_, address oAddress_, uint uiValue_);

    constructor() { 
        oMasterOwner = msg.sender; 
        uiRegistrationPrice=10; 
    }
    
    function newAsset(
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _AssetType,
        string memory _sShortDescription,
        string memory _sLongDescription
    )   
    public // external: Recommended to reduce gas. 
    //payable 
    returns (address _oAssetAddress) 
    {
    //) public payable newAssetCheck(uiRegistrationPrice) {
        Asset oAsset_ = new Asset();
        address oAssetAddress_ = address(oAsset_);
        oAsset_.updateAsset(
            _sName,
            _sEmail,
            _sCPF,
            _AssetType,
            _sShortDescription,
            _sLongDescription
        );
        mapAddressActive[oAssetAddress_] = oAsset_;
        mapOwnerActive[msg.sender] = oAsset_;
        mapCpfActive[_sCPF] = oAsset_;
        
        //emit AssetEvent(msg.sender, oAssetAddress_, msg.value);

        return (oAssetAddress_);        
    }
    
    function getAsset(
        address _oAddress
    ) public view returns (
        address,
        string memory, 
        string memory, 
        string memory,
        string memory,
        string memory, 
        string memory
    ) {
        Asset oAsset_ = mapAddressActive[_oAddress];
        if ( address(oAsset_) != address(0x00) ) {
            return (oAsset_.getAsset());
        }
        return (address(0x00), "", "", "", "", "", "");
    }

    function updateAsset(
        address _oAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sAssetType,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public returns (
        address
    ) {
        Asset oAsset_ = mapAddressActive[_oAddress];
        if ( address(oAsset_) == address(0x00) ) {
            return (address(0x00));
        }
        oAsset_.updateAsset(
            _sName,
            _sEmail,
            _sCPF,
            _sAssetType,
            _sShortDescription,
            _sLongDescription
        );

        //emit AssetEvent(msg.sender, oAssetAddress_, msg.value);

        return (oAsset_.getAddress());        
    }

    function setInactive(
        address _oAddress
    ) public returns (
        address
    ) {
        Asset oAsset_ = mapAddressActive[_oAddress];
        if ( address(oAsset_) == address(0x00) ) {
            return (address(0x00));
        }

        oAsset_.setStatus(false);  //false=Inactive

        address oAssetAddress_ = oAsset_.getAddress();
        address oOwner_ = oAsset_.getOwner();
        string memory sCpf_ = oAsset_.getCPF();
        mapAddressInactive[oAssetAddress_] = oAsset_;
        mapOwnerInactive[oOwner_] = oAsset_;
        mapCpfInactive[sCpf_] = oAsset_;
        
        delete mapAddressActive[oAssetAddress_];
        delete mapOwnerActive[oOwner_];
        delete mapCpfActive[sCpf_];

        return (oAsset_.getAddress());        
    }

    /*
    event LogsetFileHash(bytes32 _hashValue);
    function setFileHash(bytes32 _hashValue) {
        emit LogsetFileHash(_hashValue); 
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    function close() onlyOwner {
        selfdestruct(owner);
    }
    //Contract destructor
    function runDesativar() public {
        require(msg.sender == owner);
        selfdestruct(owner);
    }
    
    // destroy the contract and reclaim the leftover funds.
    function shutdown() public {
        require(msg.sender == owner);
        selfdestruct(msg.sender);
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
    */

    function runTest() public view returns (address) {
        return (address(this));
    }
}

contract Asset {
    address oAddress;
    address oOwner;             //msg.sender (address): sender of the message (current call)
    address oOrigin;            // tx.origin (address): sender of the transaction (full call chain)
    address oCoinBase;          //block.coinbase (address): current block miner’s address
    uint uiTimestamp;           //block.timestamp (uint): current block timestamp as seconds since unix epoch
    uint uiValue;               //msg.value (uint): number of wei sent with the message
    uint uiGasPrice;            //tx.gasprice (uint): gas price of the transaction
    string sName;
    string sEmail;
    string sCPF;
    string sAssetType;          //Could be: Diamante, Ouro, Imovel, ...
    string sShortDescription;
    string sLongDescription;
    bool   bActive;             //Active={true,false}
    
    event AssetEvent(address oAssetAddress_);

    constructor ()  { }
    
    function updateAsset(
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sAssetType,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) 
    public 
    returns (address _oAssetAddress)
    { 
        address oAssetAddress_ = address(this);
        
        oAddress    = oAssetAddress_;
        oOwner      = msg.sender;
        oOrigin     = tx.origin;
        oCoinBase   = block.coinbase;
        uiTimestamp = block.timestamp;
        //uiValue     : msg.value;
        uiValue     = 0;
        uiGasPrice  = tx.gasprice;
        sName       = _sName;
        sEmail      = _sEmail;
        sCPF        = _sCPF;
        sAssetType  = _sAssetType;
        sAssetType  = _sAssetType;
        sShortDescription = _sShortDescription;
        sLongDescription  = _sLongDescription;

        emit AssetEvent(oAssetAddress_);

        return (oAssetAddress_);
    }

    function getAsset() 
    public 
    view 
    returns (
        address _oAssetAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sAssetType,
        string memory _sShortDescription,
        string memory _sLongDescription    
    ){
        return (
            oAddress,
            sName, 
            sEmail, 
            sCPF, 
            sAssetType,
            sShortDescription, 
            sLongDescription
        );
    }

    function setStatus(bool bActive_) public {
        bActive=bActive_;
    }
    function getAddress() public view returns(address) {
        return oAddress;
    }
    function getOwner() public view returns(address) {
        return oOwner;
    }
    function getCPF() public view returns(string memory) {
        return sCPF;
    }
}
