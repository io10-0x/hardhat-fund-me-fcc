const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  fundMe = await ethers.getContract("FundMe", deployer);
  const tx1 = await fundMe.withdraw();
  await tx1.wait(1);
  console.log("Withdrawal complete");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
