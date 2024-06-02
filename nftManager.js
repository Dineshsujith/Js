class NFT {
    constructor(title, description, imageUrl) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

// Create a variable to hold your NFTs
const myNFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(title, description, imageUrl) {
    const nft = new NFT(title, description, imageUrl);
    myNFTs.push(nft);
}

// This function will iterate over the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < myNFTs.length; i++) {
        const nft = myNFTs[i];
        console.log("Title: " + nft.title);
        console.log("Description: " + nft.description);
        console.log("Image URL: " + nft.imageUrl);
        console.log("----------------------");
    }
}

// This function will print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return myNFTs.length;
}

// Call your functions below this line

mintNFT("Galaxy Art", "A beautiful depiction of a galaxy", "https://example.com/image1.png");
mintNFT("Ocean Photography", "A serene view of the ocean", "https://example.com/image2.png");
mintNFT("Cyberpunk Art", "Futuristic cityscape in cyberpunk style", "https://example.com/image3.png");
mintNFT("Nature Sculpture", "A stunning sculpture of a tree", "https://example.com/image4.png");

console.log("Listing NFTs:");
listNFTs();

console.log("Total NFTs created: " + getTotalSupply());
