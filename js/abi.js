const contract_abi = 

[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_oAddress",
				"type": "address"
			}
		],
		"name": "getAsset",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_sName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sCPF",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_AssetType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sShortDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sLongDescription",
				"type": "string"
			}
		],
		"name": "newAsset",
		"outputs": [
			{
				"internalType": "address",
				"name": "_oAssetAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "runTest",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_oAddress",
				"type": "address"
			}
		],
		"name": "setInactive",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_oAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_sName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sCPF",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sAssetType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sShortDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sLongDescription",
				"type": "string"
			}
		],
		"name": "updateAsset",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

;