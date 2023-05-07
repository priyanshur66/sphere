




// Replace the contract address with your deployed contract address
const contractAddress = '0x45FeA5CA4306403CA3337394e140783102142B51';

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

async function init() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const paperCount = await contract.methods.getPaperCount().call();
  await displayPapers(paperCount);
}

function truncateText(text, maxLength, byWords) {
    if (byWords) {
        const words = text.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
    } else {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
    }
    return text;
}

async function getReviewContent(paperId) {
	const reviews = await contract.methods.getPaperReviews(paperId).call();
	return reviews.map(review => {
	  return {
		content: review.content,
		reviewer: review.reviewer.slice(0, 6) + "..."
	  };
	});
  }

  
function createPaperCard(paper) {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    const card = document.createElement('div');
    card.className = 'card w-96 bg-base-100 shadow-xl';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = 'paper1.png';
    figure.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = truncateText(paper.title, 6, true);

    const table = document.createElement('table');
    table.className = 'table';
    const tbody = document.createElement('tbody');

    const authorNameRow = document.createElement('tr');
    const authorNameData = document.createElement('td');
    authorNameData.textContent = paper.authorName;
    authorNameRow.appendChild(authorNameData);

    const publicationDateRow = document.createElement('tr');
    const publicationDateData = document.createElement('td');
    publicationDateData.textContent = `Publication Date: ${new Date(paper.publicationDate * 1000).toLocaleDateString()}`;
    publicationDateRow.appendChild(publicationDateData);

 

    const referenceFeeRow = document.createElement('tr');
    const referenceFeeData = document.createElement('td');
    const referenceFeeInEther = web3.utils.fromWei(paper.fee.toString(), 'ether');
    referenceFeeData.textContent = `Reference Fee: ${referenceFeeInEther} ETH`;
    referenceFeeRow.appendChild(referenceFeeData);

    const referencesToRow = document.createElement('tr');
    const referencesToData = document.createElement('td');
    referencesToData.textContent = `References To: ${paper.referencesTo.join(', ')}`;
    referencesToRow.appendChild(referencesToData);

    const keywordsRow = document.createElement('tr');
    const keywordsData = document.createElement('td');
    keywordsData.textContent = `Keywords: ${paper.keywords.join(', ')}`;
    keywordsRow.appendChild(keywordsData);

    tbody.appendChild(authorNameRow);
    tbody.appendChild(publicationDateRow);
  
    tbody.appendChild(referenceFeeRow);
    
    tbody.appendChild(keywordsRow);
    table.appendChild(tbody);

    const cardActions = document.createElement('div');
    cardActions.className = 'card-actions justify-end';
    const detailsButton = document.createElement('button');
    detailsButton.className = 'btn btn-primary';
    detailsButton.textContent = 'READ';
    detailsButton.addEventListener('click', () => {
        window.location.href = `pagedetail.html?paperId=${paper.id}`;
    });

    cardActions.appendChild(detailsButton);

    cardBody.appendChild(title);
    cardBody.appendChild(table);
    cardBody.appendChild(cardActions);

    card.appendChild(figure);
    card.appendChild(cardBody);
    carouselItem.appendChild(card);

    return carouselItem;
}

  


 
  async function displayPapers(paperCount) {
	const papersContainer = document.getElementById('papers-container');
	const carousel = papersContainer.querySelector('.carousel');
	carousel.innerHTML = ''; // Clear the carousel to remove dummy data
  
	for (let i = 1; i <= paperCount; i++) {
	  const paper = await contract.methods.papers(i).call();
	  const referencesTo = await contract.methods.getPaperReferences(i).call();
	  const keywords = await contract.methods.getPaperKeywords(i).call();
  
	  // Add referencesTo and keywords properties to the paper object
	  paper.referencesTo = referencesTo;
	  paper.keywords = keywords;
  
	  const paperCard = createPaperCard(paper);
	  carousel.appendChild(paperCard);
	}
  }
  

init();
