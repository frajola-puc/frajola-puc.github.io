const abi = 
[
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
				"name": "_sShortDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sLongDescription",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getAddress",
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
		"inputs": [],
		"name": "getCPF",
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
		"inputs": [],
		"name": "getEmail",
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
		"inputs": [],
		"name": "getLongDescription",
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
		"inputs": [],
		"name": "getName",
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
		"inputs": [],
		"name": "getShortDescription",
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
	}
];