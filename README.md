<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment">
    <img src="images/logo.png" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">Fund Me Smart Contract</h3>

  <p align="center">
    Smart Contract To Collect Funds

<br />
<a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment">View Demo</a>
·
<a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
·
<a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About the FundMe Smart Contract

## Introduction

The FundMe smart contract is a Solidity-based decentralized application designed to facilitate secure crowdfunding. Users can contribute funds, and the contract ensures that only the contract owner can withdraw these funds. The contract leverages Chainlink oracles to ensure the value of contributions meets a minimum threshold in USD.

## Key Features

- **Security**: The contract implements robust security features, including an owner-only withdrawal mechanism and minimum funding requirements.
- **Chainlink Price Feeds**: Integrates with Chainlink to convert ETH contributions to USD, ensuring all contributions meet the required minimum value.
- **Gas Optimization**: The contract is optimized for gas efficiency, utilizing best practices such as minimizing storage operations and using `immutable` and `constant` variables.
- **Easy Deployment**: Using the Hardhat framework, the contract can be deployed easily across various Ethereum networks with a focus on both development and production environments.

## Contract Architecture

The FundMe smart contract is structured for modularity and efficiency:

- **FundMe.sol**: The core contract that manages contributions, enforces minimum funding requirements, and allows the owner to withdraw funds.
- **PriceConverter.sol**: A library that provides utility functions for converting ETH amounts to USD using Chainlink price feeds.
- **MockV3Aggregator.sol**: A mock contract used for testing purposes, simulating the behavior of Chainlink's price feeds in a local development environment.

## Gas Optimization Techniques

To ensure efficient use of gas, the FundMe contract employs several strategies:

1. **Efficient Storage Usage**: The contract minimizes the number of storage operations, reducing gas costs associated with storing data on the blockchain.
2. **Immutable and Constant Variables**: By using `immutable` and `constant` variables where applicable, the contract reduces the need for costly storage reads.
3. **Optimized Withdrawals**: The `cheaperWithdraw` function reduces gas usage during withdrawals by batching storage operations and minimizing SLOAD instructions.

## Deployment & Testing

The contract is deployed and tested using Hardhat, a popular Ethereum development framework. Key aspects of deployment and testing include:

- **Automated Deployment**: Deployment scripts are configured to automate the process across different networks, ensuring consistency and reducing human error.
- **Local Development with Mocks**: During local development, the contract uses mock price feeds provided by `MockV3Aggregator`, allowing developers to test without relying on live Chainlink data.
- **Comprehensive Testing**: The project includes unit tests to verify the functionality of the contract, ensuring robustness and reliability before deployment to production.

## Chainlink Integration

The FundMe contract integrates with Chainlink's decentralized oracles to:

- **Convert ETH to USD**: The contract uses Chainlink's price feeds to ensure that all contributions meet the minimum required amount in USD, protecting contributors and ensuring fair funding practices.
- **Dynamic Minimum Funding Requirement**: By relying on real-time price data from Chainlink, the contract dynamically adjusts to the current ETH/USD exchange rate.

## Conclusion

The FundMe smart contract is designed to offer a secure, efficient, and transparent crowdfunding solution on the Ethereum blockchain. With its integration of Chainlink oracles and focus on gas optimization, it provides a reliable platform for managing pooled funds. The project is well-suited for developers looking to explore decentralized finance (DeFi) applications and smart contract development.

For further details, including setup and deployment instructions, refer to the project's documentation and source code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Ethers.js][Ethers.js]][Ethers-url]
- [![Chainlink][Chainlink.js]][Chainlink-url]
- [![OpenZeppelin][OpenZeppelin.js]][OpenZeppelin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Installation Guide

Follow these steps to set up your project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn** (package managers)
- **Metamask** (for connecting to Ethereum blockchain)
- **Hardhat** (Ethereum development environment)

### Step 1: Clone the Repository

Start by cloning the project repository to your local machine:

```sh
git clone https://github.com/io10-0x/React-Simple-Job-Listing-Webpage.git
cd React-Simple-Job-Listing-Webpage
```

### Step 2: Install Dependencies

Next, install the required dependencies using npm or yarn:

```sh
npm install
```

Or if you prefer yarn:

```sh

yarn install

```

### Step 3: Set Up Environment Variables

Create a .env file in the root directory of your project and add the necessary environment variables:

```sh

ETHERSCAN_TOKEN=<Your Etherscan API Key>
PRIVATE_KEY=<Your Wallet Private Key>
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/<Your Infura Project ID>
```

Replace the placeholders:

<Your Etherscan API Key> with your Etherscan API key.
<Your Wallet Private Key> with the private key of your wallet (ensure this wallet has funds for testnet/mainnet transactions).
<Your Infura Project ID> with your Infura project ID if you are using Infura as your provider.

### Step 4: Compile the Contracts

Compile the smart contracts using Hardhat:

```sh

npx hardhat compile
```

### Step 5: Deploy Contracts Locally

To deploy the contracts on a local Hardhat network, run:

```sh

npx hardhat node
```

In a new terminal, deploy the contracts:

```sh

npx hardhat run scripts/deploy.js --network localhost
```

### Step 6: Deploy Contracts on Testnet/Mainnet

For deploying on a testnet or mainnet, make sure your environment variables in .env are properly configured. Then run:

```sh

npx hardhat run scripts/deploy.js --network <network-name>
Replace <network-name> with the desired network, e.g., sepolia or mainnet.
```

### Step 7: Verify Contracts on Etherscan

To verify the contracts on Etherscan (after deployment on a public network), use the following command:

```sh

npx hardhat verify --network <network-name> <DEPLOYED_CONTRACT_ADDRESS> <constructor arguments>

```

### Step 8: Run Tests

You can run the project’s test suite using:

```sh

npx hardhat test
```

### Step 9: Start the Frontend (Optional)

This project includes a minimalistic front end for user interaction. Navigate to the frontend directory and start the development server:

```sh

git clone https://github.com/io10-0x/Fund-me-contract-front-end-deployment.git
cd Fund-me-contract-front-end-deployment
npm install
npm start

```

Or with yarn:

```sh

git clone https://github.com/io10-0x/Fund-me-contract-front-end-deployment.git
cd Fund-me-contract-front-end-deployment
yarn install

```

Typically, for a simple front-end like this, you don't need to run a specific server command. However, if you have a development server set up (e.g., with a bundler like Vite or Webpack), you would start it with:

```sh
yarn start
```

If you're not using any bundler or server, you can simply open the index.html file in your browser to run the application.

Serving the Project Locally:

If you're using a live server (like the Live Server extension for VS Code), you can right-click on index.html and select "Open with Live Server" to view your project in the browser.

Your local development environment should now be fully set up!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Frontend Interaction with FundMe.sol
The FundMe.sol contract is designed to allow users to fund the contract with ETH, check their contributions, and for the contract owner to withdraw the funds. To make this accessible to non-technical users, a frontend interface is typically built, which interacts with the contract via a web3 provider like MetaMask. Here's how the frontend can be used to interact with the FundMe.sol contract:

1. Connecting the Wallet
   Users can connect their Ethereum wallet (e.g., MetaMask) to the frontend. This connection is usually triggered by a "Connect Wallet" button on the webpage. Once connected, the user's Ethereum address is linked to the frontend, enabling them to interact with the smart contract.

2. Funding the Contract
   On the frontend, users can input the amount of ETH they want to contribute to the contract. This input is taken from an HTML form or input field. When the user clicks the "Fund" button:

The frontend calls the fund function of the FundMe.sol contract.
The amount of ETH specified by the user is sent to the contract.
The transaction is processed through the user's connected wallet, with MetaMask prompting the user to confirm the transaction.

3. Displaying Contribution Data
   The frontend can display the total amount of ETH a user has contributed by calling the getAmountFunded function of the contract:

The user's Ethereum address is passed to the getAmountFunded function.
The frontend then retrieves and displays the total contribution amount in a readable format.

4. Withdrawing Funds
   For the owner of the contract, the frontend will typically have an "Admin" section where the owner can withdraw all funds from the contract:

This section is only accessible if the connected wallet matches the owner's address stored in the contract.
The owner clicks the "Withdraw" button, which calls the withdraw or cheaperWithdraw function, transferring all ETH from the contract to the owner's wallet.

5. Listening for Transactions
   To provide a seamless user experience, the frontend can listen for transaction events and update the UI accordingly:

When a user funds the contract, the frontend can display a loading spinner or a "Processing" message until the transaction is confirmed on the blockchain.
Once confirmed, the frontend updates the UI to reflect the new contract balance or the user's contribution.
The frontend can also listen for the completion of withdrawal transactions and update the interface to show the new contract state.

6. Handling Errors
   The frontend also includes error handling mechanisms to guide users:

If the transaction fails (e.g., due to insufficient gas fees), the frontend will display an error message.
If the user tries to fund the contract with an amount below the minimum required, an error is shown.

7. Deployment and Configuration
   The frontend can be deployed on any web hosting service. It connects to the Ethereum network (mainnet or testnet) through an Infura endpoint or directly via MetaMask. The contract's ABI (Application Binary Interface) and address are stored in the frontend's configuration file, allowing the frontend to interact with the deployed FundMe.sol contract.

## WebPage Preview

Sample of what pages should look like after deployment

![Fund-Me Front End Screenshot][FrontEnd-Image]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=io10-0x/hardhat-fund-me-fcc-backend-deployment" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment](https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Smart Contract Kit Github](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)
- [Full Blockchain and Solidity Course YT](https://www.youtube.com/watch?v=gyMwXuJrbJQ)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/io10-0x/hardhat-fund-me-fcc-backend-deployment.svg?style=for-the-badge
[contributors-url]: https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/io10-0x/hardhat-fund-me-fcc-backend-deployment.svg?style=for-the-badge
[forks-url]: https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/network/members
[stars-shield]: https://img.shields.io/github/stars/io10-0x/hardhat-fund-me-fcc-backend-deployment.svg?style=for-the-badge
[stars-url]: https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/stargazers
[issues-shield]: https://img.shields.io/github/issues/io10-0x/hardhat-fund-me-fcc-backend-deployment.svg?style=for-the-badge
[issues-url]: https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/issues
[license-shield]: https://img.shields.io/github/license/io10-0x/hardhat-fund-me-fcc-backend-deployment.svg?style=for-the-badge
[license-url]: https://github.com/io10-0x/hardhat-fund-me-fcc-backend-deployment/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ivan-otono-87a921261
[OpenZeppelin.js]: https://img.shields.io/badge/openzeppelin-4E5EE4?style=for-the-badge&logo=openzeppelin&logoColor=black
[OpenZeppelin-url]: https://www.openzeppelin.com/
[Chainlink.js]: https://img.shields.io/badge/chainlink-375BD2?style=for-the-badge&logo=chainlink&logoColor=black
[Chainlink-url]: https://chain.link/
[Ethers.js]: https://img.shields.io/badge/ethers-2535A0?style=for-the-badge&logo=ethers&logoColor=black
[Ethers-url]: https://docs.ethers.org/v5/
[FrontEnd-Image]: /images/FrontEnd.png
