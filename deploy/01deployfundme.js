const { networkConfig } = require("../helper-hardhat-config");
const { network } = require("hardhat");
require("dotenv").config();
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let pricefeedaddress;
  if (chainId == 31337) {
    const pricefeedmock = await deployments.get("MockV3Aggregator");
    pricefeedaddress = pricefeedmock.address;
  } else {
    pricefeedaddress = networkConfig[chainId]["ethusdpricefeed"];
  }

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [pricefeedaddress],
    log: true,
  });
  log("-----------------------------------------");

  if (!chainId == 31337 && process.env.ETHERSCAN_TOKEN) {
    await verify(fundMe.address, [pricefeedaddress]);
  }
  log(`Verified contract at ${fundMe.address}`);
};

module.exports.tags = ["all", "fundme"];
