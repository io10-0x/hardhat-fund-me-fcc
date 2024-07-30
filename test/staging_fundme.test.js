const { assert } = require("chai");
const { deployments, ethers, getNamedAccounts, network } = require("hardhat");

network.chainId == 31337
  ? describe.skip
  : describe("stagingtest", async function () {
      let deployer;
      let fundMe;
      const sendval = await ethers.parseEther("0.05");
      beforeEach(async function () {
        await deployments.fixture(["all"]);
        deployer = (await getNamedAccounts()).deployer;
        fundMe = await ethers.getContract("FundMe", deployer);
      });

      it("deployer can fund and withdraw", async function () {
        const tx1 = await fundMe.fund({ value: BigInt(sendval) });
        const tx1receipt = await tx1.wait();
        const tx2 = await fundMe.withdraw();
        const tx2receipt = await tx2.wait();

        assert.equal(await fundMe.getamountfunded(deployer), 0);
      });
    });
