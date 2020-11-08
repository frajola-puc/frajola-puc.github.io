pragma solidity ^0.7.0;
// SPDX-License-Identifier: MIT

// Fonte:
// https://kauri.io/remix-ide-your-first-smart-contract/124b7db1d0cf4f47b414f8b13c9d66e2/a

//0xeb591C7ad088f0B0D91eE2b529d82F355D786B87

// PersonalToken=14a3b4207599f2b66de9cfa197e33204a43b50ed
// MetamaskToken=0xeb591C7ad088f0B0D91eE2b529d82F355D786B87
// Account=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 (MIT)


contract MasterOwnershipControl {
    address internal oMasterOwner;
    uint    internal uiRegistrationPrice;               //Preco de Registro
    uint    internal uiEth;                             //uiEth ~= 10 usd
    uint    internal uiGas;                             //uiGas ~= (Gas * 10.000.000) * uiEth
    mapping(address => Asset)      internal mapAddressActive; //Mapping Principal
    mapping(address => Asset)       internal mapOwnerActive; //Mapping Principal
    mapping(string => Asset)       internal mapCpfActive;  //Busca pelo CPF
    uint  internal uiAssetCount;                        //Quantidade de Asset

    //event AssetEvent(address oOwner_, address oAddress_, uint uiValue_);
    event AssetEvent(address oAddress_);
    
    constructor() { 
        oMasterOwner = msg.sender; 
        uiRegistrationPrice=10; 
        uiAssetCount=0; 
    }
    
    function newAsset(
        string memory _sName,
        string memory _sEmail,
        string memory  _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    )   
    public // external: Recommended to reduce gas. 
    //payable 
    returns (address _oAssetAddress) 
    {
        //payable returns (address) {
    //) public  { 
    //) public payable newAssetCheck(uiRegistrationPrice) {
        //Source: Difference between 'memory', 'storage' and 'stack'.
        // https://medium.com/coinmonks/ethereum-solidity-memory-vs-storage-which-to-use-in-local-functions-72b593c3703a
        // https://medium.com/coinmonks/what-the-hack-is-memory-and-storage-in-solidity-6b9e62577305#:~:text=Storage%3A%20The%20persistent%20memory%20that,the%20execution%20of%20the%20function.&text=It%20costs%20same%20as%20memory,a%20limited%20amount%20of%20values.
                
        Asset oAsset_ = new Asset();
        address oAssetAddress_ = address(oAsset_);
        oAsset_.updateAsset(
            //oAssetAddress_,
            _sName,
            _sEmail,
            _sCPF,
            "Diamante",
            _sShortDescription,
            _sLongDescription
        );
        mapAddressActive[oAssetAddress_] = oAsset_;
        mapOwnerActive[msg.sender] = oAsset_;
        mapCpfActive[_sCPF] = oAsset_;
        
        //emit AssetEvent(msg.sender, oAssetAddress_, msg.value);
        emit AssetEvent(oAssetAddress_);
    
        return (oAssetAddress_);        
    }

    /*
    event LogsetFileHash(bytes32 _hashValue);
    function setFileHash(bytes32 _hashValue) {
        emit LogsetFileHash(_hashValue); 
    }
    function updateAsset(
        uint _uiAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public updateAssetCheck(_uiAddress) { 
        Asset oAsset_ = mapAsset[mapAddress[_uiAddress]];
        oAsset_.updateAsset(
            _sName,
            _sEmail,
            _sCPF,
            _sShortDescription,
            _sLongDescription        
        );
        //emit AssetEvent(address(oAsset_));
        emit AssetEvent(msg.sender, _uiAddress, msg.value);
    }
    
    //modifier onlyOwner {
    //    require(msg.sender == owner);
    //    _;
    //}
    //function close() onlyOwner {
    //    selfdestruct(owner);
    //}
    // Contract destructor
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
    function changePrice(uint _uiRegistrationPrice) public onlyMocOwner {
      uiRegistrationPrice = _uiRegistrationPrice;
    }
    */
    function runTest() public view returns (address) {
        return (address(this));
    }
}
/*
contract Asset {
    address oAddress;

    //constructor ()  { }
    
    
    function updateAsset(
    ) 
    public
    { 
        oAddress    = address(this);
    }
    
}
*/

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
    //AssetType eAssetType;     //eAssetType=AssetType.Diamante
    string sAssetType;          //Could be: Diamante, Ouro, Imovel, ...
    //bytes32 sShortDescription;// bytes32 is cheaper than string
    string sShortDescription;
    string sLongDescription;
    
    //event AssetUpdated(address oAddress_);

    constructor ()  { }
    
    function updateAsset(
        //address _oAddress,
        string memory _sName,
        string memory _sEmail,
        string memory _sCPF,
        string memory _sAssetType,
        string memory _sShortDescription,
        string memory _sLongDescription
    ) public { 
        oAddress    = address(this);
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
        sShortDescription = _sShortDescription;
        sLongDescription  = _sLongDescription;
    }
}
/*
    
    getAddress() private returns(address) {
        return oAddress;
    }
    function getName() private returns(string memory) {
        return sName;
    }
    function getEmail() private returns(string memory) {
        return sEmail;
    }
    function getCPF() private returns(string memory) {
        return sCPF;
    }
    function getShortDescription() private returns(string memory) {
        return sShortDescription;
    }
    function getLongDescription() private returns(string memory) {
        return sLongDescription;
    }
    
}
*/
