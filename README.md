
```markdown
# NFT Manager

This project provides a simple NFT (Non-Fungible Token) manager implemented in JavaScript. It allows you to mint new NFTs, list all the minted NFTs, and get the total supply of NFTs created.

## Features

- Mint new NFTs with a title, description, and image URL.
- List all NFTs with their metadata.
- Get the total number of NFTs created.

## Usage

You can run the `nftManager.js` file using Node.js to see how it works.

1. Open a terminal and navigate to the directory containing the `nftManager.js` file.
2. Run the following command to execute the script:

    ```sh
    node nftManager.js
    ```

3. The script will output the list of NFTs and the total number of NFTs created to the console.

## Code Overview

- The `NFT` class is used to create NFT objects with a title, description, and image URL.
- The `myNFTs` array is used to store the created NFTs.
- The `mintNFT` function takes the title, description, and image URL as parameters, creates an NFT object, and stores it in the `myNFTs` array.
- The `listNFTs` function iterates over the `myNFTs` array and prints the metadata of each NFT to the console.
- The `getTotalSupply` function returns the total number of NFTs created.

## Example

Here's an example of how to use the NFT manager:

```javascript
// Minting new NFTs
mintNFT("Galaxy Art", "A beautiful depiction of a galaxy", "https://example.com/image1.png");
mintNFT("Ocean Photography", "A serene view of the ocean", "https://example.com/image2.png");
mintNFT("Cyberpunk Art", "Futuristic cityscape in cyberpunk style", "https://example.com/image3.png");
mintNFT("Nature Sculpture", "A stunning sculpture of a tree", "https://example.com/image4.png");

// Listing all NFTs
console.log("Listing NFTs:");
listNFTs();

// Getting the total number of NFTs created
console.log("Total NFTs created: " + getTotalSupply());
```
