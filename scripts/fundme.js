const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding contract");
  const tx1 = await fundMe.fund({ value: ethers.parseEther("0.05") });
  await tx1.wait(1);
  console.log(`Contract funded at ${await fundMe.getAddress()}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
