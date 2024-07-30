require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-solhint");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("dotenv").config();

const SEPOLIAURL = process.env.SEPOLIA_RPC_URL;
const PKEY = process.env.PRIVATE_KEY;
const ETHERSCANKEY = process.env.ETHERSCAN_TOKEN;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIAURL,
      accounts: [PKEY],
      chainId: 11155111,
    },
    localhost: {
      url: " http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      11155111: 0,
    },
  },
  etherscan: {
    apiKey: ETHERSCANKEY,
  },
  gasReporter: {
    enabled: true,
    //outputFile: "./gasreport.txt",
  },
  sourcify: {
    enabled: false,
  },
};
