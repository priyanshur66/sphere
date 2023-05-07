const contractAddress = '0xCBC1cfDeF197845636a11a3F80e1DfE6F0eB7736';

const abi  = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "usersContractAddress",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_platformWalletAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paperId",
				"type": "uint256"
			}
		],
		"name": "calculateTotalFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "authorName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "referenceFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "referencesTo",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "keywords",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "createPaper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPaperCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_paperId",
				"type": "uint256"
			}
		],
		"name": "getPaperKeywords",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_paperId",
				"type": "uint256"
			}
		],
		"name": "getPaperReferences",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "papers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "authorName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "publicationDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "referenceFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
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
				"name": "paperId",
				"type": "uint256"
			}
		],
		"name": "purchasePaper",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];



const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(abi, contractAddress);

async function publishPaper(title, authorName, referenceFee, referencesTo, fee, keywords, ipfsHash) {
	const accounts = await web3.eth.getAccounts();
	const fromAddress = accounts[0];
  
	await contract.methods.createPaper(
	  title,
	  authorName,
	  referenceFee,
	  referencesTo,
	  fee,
	  keywords,
	  ipfsHash
	)
	.send({ from: fromAddress })
	.then(() => {
	  alert('Paper published successfully');
	})
	.catch((error) => {
	  console.error(error);
	  alert('Error publishing paper');
	});
  }
  
  document.getElementById('publish-form').addEventListener('submit', async (event) => {
	event.preventDefault();
  
	const titleInput = document.getElementById('title');
	const authorNameInput = document.getElementById('author-name');
	
	// New input fields added
	const referenceFeeInput = document.getElementById('reference-fee');
	const referencesToInput = document.getElementById('references-to');
	const keywordsInput = document.getElementById('keywords');
  
	// Convert the entered reference fee from Ether to Wei
	const referenceFeeInWei = web3.utils.toWei(referenceFeeInput.value.toString(), 'ether');
  
	// Convert comma separated values to arrays for referencesTo and keywords
	const referencesToArray = referencesToInput.value.trim() ? referencesToInput.value.split(',').map(Number) : [];
	const keywordsArray = keywordsInput.value.trim() ? keywordsInput.value.split(',').map(item => item.trim()) : [];
	
	
	
  
	const ipfsHashInput = document.getElementById('ipfs-hash');
	const feeInput = document.getElementById('fee');
const feeInWei = web3.utils.toWei(feeInput.value.toString(), 'ether');
  
	await publishPaper(titleInput.value, authorNameInput.value, referenceFeeInWei, referencesToArray, feeInWei, keywordsArray, ipfsHashInput.value);
});

document.getElementById('publish-form').addEventListener('submit', async (event) => {
	event.preventDefault();
  
	const titleInput = document.getElementById('title');
	const authorNameInput = document.getElementById('author-name');
	
	// New input fields added
	const referenceFeeInput = document.getElementById('reference-fee');
	const referencesToInput = document.getElementById('references-to');
	const keywordsInput = document.getElementById('keywords');
	
	// Convert the entered reference fee from Ether to Wei
	const referenceFeeInWei = web3.utils.toWei(referenceFeeInput.value.toString(), 'ether');
  
	// Convert comma separated values to arrays for referencesTo and keywords
	const referencesToArray = referencesToInput.value.split(',').map(Number);
	const keywordsArray = keywordsInput.value.split(',');
  
	const ipfsHashInput = document.getElementById('ipfs-hash');
	const feeInput = document.getElementById('fee');
	const feeInWei = web3.utils.toWei(feeInput.value.toString(), 'ether');
  
	await publishPaper(titleInput.value, authorNameInput.value, referenceFeeInWei, referencesToArray, feeInWei, keywordsArray, ipfsHashInput.value);
  });
  
