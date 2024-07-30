const { network } = require("hardhat");

const DECIMALS = 8;
const _initialanswer = 200000000000;
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  if (chainId == 31337) {
    log("DEPLOYING MOCKS");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      args: [DECIMALS, _initialanswer],
      log: true,
    });
  }
};

module.exports.tags = ["all", "mocks"];
