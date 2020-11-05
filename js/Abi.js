const address = "0xd40D25F18267E60547555e251E5aDDe331807E35";
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uiRegistrationPrice",
				"type": "uint256"
			}
		],
		"name": "changePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "_sCPF",
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
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
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
			},
			{
				"internalType": "string",
				"name": "_sName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sCPF",
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
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_sCPF",
				"type": "string"
			}
		],
		"name": "getAssetByCPF",
		"outputs": [
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
				"internalType": "uint256",
				"name": "_oAddress",
				"type": "uint256"
			}
		],
		"name": "getAssetByKey",
		"outputs": [
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
	}
]