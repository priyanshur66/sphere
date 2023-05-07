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

const usersContractAddress = '0x45FeA5CA4306403CA3337394e140783102142B51';
const usersContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256[]",
						"name": "publishedPapers",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "purchasedPapers",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "referencedPapers",
						"type": "uint256[]"
					}
				],
				"internalType": "struct UsersContract.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserPublishedPapers",
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
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserPurchasedPapers",
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
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paperId",
				"type": "uint256"
			}
		],
		"name": "updateUserPublishedPapers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paperId",
				"type": "uint256"
			}
		],
		"name": "updateUserPurchasedPapers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paperId",
				"type": "uint256"
			}
		],
		"name": "updateUserReferencedPapers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const reviewContractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paperId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "reviewer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "getReviews",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "reviewer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					}
				],
				"internalType": "struct PaperReviews.Review[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
// Replace with your reviewContract's address
const reviewContractAddress = "0xa79A6326251B0051788DCa2337137afc678c2A7B";










const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(abi, contractAddress);
const reviewContract = new web3.eth.Contract(reviewContractABI, reviewContractAddress);

function getPaperIdFromUrl() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('paperId');
  }


async function displayPaperDetails(paperId) {
	const paperDetailsContainer = document.getElementById('paper-details-container');
  
	const paper = await contract.methods.papers(paperId).call();
  
	const title = document.createElement('h2');
	title.textContent = `${paper.title}`;
  
	title.classList.add("text-2xl")
	title.classList.add("m-4")
  
	const authorName = document.createElement('h4');
	authorName.textContent = `By: ${paper.authorName}`;
	authorName.classList.add('text-base');
	authorName.classList.add('m-4')
  
	const publicationDate = document.createElement('p');
	const publicationDateString = new Date(paper.publicationDate * 1000).toLocaleDateString();
	publicationDate.textContent = `Publication Date: ${publicationDateString}`;
	publicationDate.classList.add('m-4');
  
	
  
	const referenceFee = document.createElement('p');
	const referenceFeeInEther = web3.utils.fromWei(paper.fee.toString(), 'ether');
	referenceFee.textContent = `Reference Fee: ${referenceFeeInEther} ETH`;
	referenceFee.classList.add('m-4');
  
	// Display total fee
	const totalFee = await contract.methods.calculateTotalFee(paperId).call();
	const totalFeeInEther = web3.utils.fromWei(totalFee.toString(), 'ether');
	const totalFeeElement = document.createElement('p');
	totalFeeElement.textContent = `Total Fee: ${totalFeeInEther} ETH`;
	totalFeeElement.classList.add('m-4');
  
	const paperReferences = await contract.methods.getPaperReferences(paperId).call();
	const references = document.createElement('p');
	references.textContent = `References To: ${paperReferences.join(', ')}`;
	references.classList.add('m-4');
  
	const paperKeywords = await contract.methods.getPaperKeywords(paperId).call();
	const keywords = document.createElement('p');
	keywords.textContent = `Keywords: ${paperKeywords.join(', ')}`;
	keywords.classList.add('m-4');

	
  
	paperDetailsContainer.appendChild(title);
	paperDetailsContainer.appendChild(authorName);
	paperDetailsContainer.appendChild(publicationDate);

	paperDetailsContainer.appendChild(referenceFee);
	paperDetailsContainer.appendChild(totalFeeElement);
	paperDetailsContainer.appendChild(references);
	paperDetailsContainer.appendChild(keywords);
	
}

  


async function purchasePaper(paperId, fee) {
  const accounts = await web3.eth.getAccounts();
  const fromAddress = accounts[0];

  // Convert the entered fee from Ether to Wei
  const weiValue = web3.utils.toWei(fee.toString(), 'ether');

  // Call the purchasePaper() function from your smart contract
  await contract.methods.purchasePaper(paperId)
    .send({ from: fromAddress, value: weiValue })
    .then(() => {
      alert('Added To My papers');
    })
    .catch((error) => {
      console.error(error);
      alert('Added to my papers');
    });
}




async function createPurchaseButton(paperId, publishedPapers, purchasedPapers) {
	if (!publishedPapers.includes(paperId) && !purchasedPapers.includes(paperId)) {
	  const purchaseButton = `
	  <div class="flex justify-center">
		<div class="mt-4">
		  <input id="fee-input" type="number" min="0" step="0.01" placeholder="Enter Amount" class="mt-1 block py-2 px-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200" style="margin-right: 30px;">
		  <button id="purchase-button" class="mt-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-500">Donate to author</button>
		</div>
	  </div>
	  `;
	  document.getElementById('paper-details-container').insertAdjacentHTML('beforeend', purchaseButton);
	  document.getElementById('purchase-button').addEventListener('click', async () => {
		const feeInput = document.getElementById('fee-input');
		const fee = parseFloat(feeInput.value);
  
		if (!isNaN(fee) && fee >= 0) {
		  await purchasePaper(paperId, fee);
		} else {
		  alert('Please enter a valid amount');
		}
	  });
	}
  }
  
  async function createAccessButton(paperId, publishedPapers, purchasedPapers, ipfsHash) {
	if (publishedPapers.includes(paperId) || purchasedPapers.includes(paperId)) {
	  const accessButton = `
	  <div class="flex justify-center">
		<div class="mt-4">
		  <button id="access-button" class="mt-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-500">Access Paper</button>
		</div>
	  </div>
	  `;
	  document.getElementById('paper-details-container').insertAdjacentHTML('beforeend', accessButton);
	  document.getElementById('access-button').addEventListener('click', async () => {
		window.location.href = `https://ipfs.io/ipf/${ipfsHash}`;
	  });
	}
  }






  async function init() {
	const accounts = await web3.eth.getAccounts();
	const userAddress = accounts[0];
	const urlParams = new URLSearchParams(window.location.search);
	const paperId = urlParams.get('paperId');
  
	const usersContract = new web3.eth.Contract(usersContractABI, usersContractAddress);
	const publishedPapers = await fetchPublishedPapers(usersContract, userAddress);
	const purchasedPapers = await fetchPurchasedPapers(usersContract, userAddress);
	
	const reviewContract = new web3.eth.Contract(reviewContractABI, reviewContractAddress);




	if (paperId) {
	  await displayPaperDetails(paperId);
	  await getReviews(paperId);
  
	  if (
		publishedPapers.includes(paperId.toString()) ||
		purchasedPapers.includes(paperId.toString())
	  ) {
		// Create button to redirect to IPFS link
		createIPFSLinkButton();
		showReviewForm();
	  } else {
		// Show "Donate to author" button
		showDonationButton();
		
	  }
	} else {
	  alert('No paper ID provided');
	}

  }
  
  
  function createIPFSLinkButton() {
	const ipfsLinkButton = document.getElementById('ipfs-link-button');
	ipfsLinkButton.style.display = 'block';
  }
  
  function showDonationButton() {
	const purchaseButton = document.getElementById('purchase-button');
	const feeInput = document.getElementById('fee-input');
	purchaseButton.style.display = 'block';
	feeInput.style.display = 'block';
  }






  function showReviewForm() {
	const reviewForm = document.getElementById('addReviewForm');
	reviewForm.style.display = 'block';
  }
  

  function createReviewDiv(reviews) {
	const reviewDiv = document.createElement('div');
	reviewDiv.className = 'review-div';
  
	if (reviews && reviews.length > 0) {
	  const reviewsTitle = document.createElement("h3");
	  reviewsTitle.textContent = "Reviews:";
	  reviewDiv.appendChild(reviewsTitle);
  
	  const reviewsList = document.createElement("ul");
  
	  reviews.forEach(review => {
		const reviewItem = document.createElement("li");
		reviewItem.textContent = `${review.reviewer.slice(0, 6)}: ${review.content}`;
		reviewsList.appendChild(reviewItem);
	  });
  
	  reviewDiv.appendChild(reviewsList);
	} else {
	  reviewDiv.textContent = "No reviews available.";
	}
  
	return reviewDiv;
  }

  async function getReviews(paperId) {
	const reviews = await reviewContract.methods.getReviews(paperId).call();
	const reviewsArray = reviews.map(review => ({
	  reviewer: review.reviewer,
	  content: review.content
	}));
  
	const reviewDiv = createReviewDiv(reviewsArray);
	document.getElementById("paper-details-container").appendChild(reviewDiv);
  }

  
  
  

  async function fetchPublishedPapers(usersContract, userAddress) {
	const publishedPapers = await usersContract.methods.getUserPublishedPapers(userAddress).call();
	console.log(publishedPapers)
	return publishedPapers;

	
	
  }
  
  async function fetchPurchasedPapers(usersContract, userAddress) {
	const purchasedPapers = await usersContract.methods.getUserPurchasedPapers(userAddress).call();
	console.log(purchasedPapers)
	return purchasedPapers;
	
  }


  document.getElementById("addReviewForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const paperId = getPaperIdFromUrl();
    const content = document.getElementById("content").value;

    await reviewContract.methods.addReview(paperId, accounts[0], content).send({ from: accounts[0] });

    alert("Review submitted!");
  });



  document.getElementById('purchase-button').addEventListener('click', async () => {
	const feeInput = document.getElementById('fee-input');
	const fee = parseFloat(feeInput.value);
  
	// Get paperId from URL parameters
	const urlParams = new URLSearchParams(window.location.search);
	const paperId = urlParams.get('paperId');
  
	if (!isNaN(fee) && fee >= 0) {
	  await purchasePaper(paperId, fee);
	} else {
	  alert('Please enter a valid amount');
	}
  });
  


  document.getElementById('ipfs-link-button').addEventListener('click', async () => {
	const paperId = new URLSearchParams(window.location.search).get('paperId');
	const paper = await contract.methods.papers(paperId).call();
	window.open(`${paper.ipfsHash}`, '_blank');
  });

  

  
  

init();