const { assert, expect } = require("chai");
const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
!(network.config.chainId == 31337)
  ? describe.skip
  : describe("Fundme project unit tests", async function () {
      let deployer;
      let accountone;
      let fundMe;
      let mockv3aggregator;
      const sendval = await ethers.parseEther("0.1");
      beforeEach(async function () {
        await deployments.fixture(["all"]);
        //deployer = (await getNamedAccounts()).deployer;
        const signers = await ethers.getSigners();
        deployer = signers[0];

        fundMe = await ethers.getContract("FundMe", deployer);
        mockv3aggregator = await ethers.getContract(
          "MockV3Aggregator",
          deployer
        );
        console.log("FundMe deployed at:", await fundMe.getAddress());
        console.log(
          "MockV3Aggregator deployed at:",
          await mockv3aggregator.getAddress()
        );
      });

      describe("Constructor Test", async function () {
        it("Test that the aggregator address is correct ", async function () {
          const pricefeedaddress = await fundMe.getpricefeedaddress();
          const mockv3aggregatoraddress = await mockv3aggregator.getAddress();
          assert.equal(mockv3aggregatoraddress, pricefeedaddress);
        });
      });

      describe("receive function", async function () {
        it("Test that the fund function is called when random funds are sent to contract ", async function () {
          const fundmeaddress = await fundMe.getAddress();
          const txresponse = await deployer.sendTransaction({
            from: deployer,
            to: fundmeaddress,
            value: sendval,
            waitConfirmations: 5,
          });

          const txreceipt = await txresponse.wait();
          console.log(txreceipt);
          const mappedvalue = await fundMe.getamountfunded(deployer.address);
          assert.equal(sendval.toString(), mappedvalue.toString());
        });

        describe("fallback function", async function () {
          it("Test that the fund function is called when random funds are sent to contract with data ", async function () {
            const fundmeaddress = await fundMe.getAddress();
            const txresponse = await deployer.sendTransaction({
              from: deployer,
              to: fundmeaddress,
              value: sendval,
              data: "0x",
            });

            const txreceipt = await txresponse.wait();
            console.log(txreceipt);
            const mappedvalue = await fundMe.getamountfunded(deployer.address);
            assert.equal(sendval.toString(), mappedvalue.toString());
          });
        });
        describe("fund function", async function () {
          it("Test require statement to make sure error statement shows up ", async function () {
            await expect(fundMe.fund()).to.be.reverted;
          });
          it("Test funders array update", async function () {
            await fundMe.fund({ value: sendval });
            const funder = await fundMe.getfunder(0);
            assert.equal(deployer.address, funder);
          });
        });

        describe("withdraw function", async function () {
          beforeEach(async function () {
            await fundMe.fund({ value: sendval });
          });
          it("test that funds are withdrawn from contract to owner wallet", async function () {
            //Arrange
            const startingcontractbalance = await ethers.provider.getBalance(
              await fundMe.getAddress()
            );
            const startingdeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            //Act
            const txresponse = await fundMe.withdraw();
            const txreceipt = await txresponse.wait();
            const { gasPrice, gasUsed } = txreceipt;
            const gascost =
              BigInt(gasPrice.toString()) * BigInt(gasUsed.toString());
            //Assert
            const fundmeaddress = await fundMe.getAddress();
            const endcontractbalance = await ethers.provider.getBalance(
              fundmeaddress
            );
            const enddeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            assert.equal(
              startingcontractbalance + startingdeployerbalance,
              enddeployerbalance + endcontractbalance + gascost
            );
          });
          it("withdraw function works with multiple funders", async function () {
            //Arrange
            const startingcontractbalance = await ethers.provider.getBalance(
              await fundMe.getAddress()
            );
            const startingdeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            const accounts = await ethers.getSigners();
            for (i = 1; i < 6; i++) {
              const fundMeconnectedaccount = await fundMe.connect(accounts[i]);
              fundMe.fund({ value: sendval });
            }
            //Act
            const txresponse = await fundMe.withdraw();
            const txreceipt = await txresponse.wait();
            const { gasPrice, gasUsed } = txreceipt;
            const gascost =
              BigInt(gasPrice.toString()) * BigInt(gasUsed.toString());
            //Assert
            const fundmeaddress = await fundMe.getAddress();
            const endcontractbalance = await ethers.provider.getBalance(
              fundmeaddress
            );
            const enddeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            assert.equal(
              startingcontractbalance + startingdeployerbalance,
              enddeployerbalance + endcontractbalance + gascost
            );
            for (i = 1; i < 6; i++) {
              assert.equal(await fundMe.getamountfunded(accounts[i]), 0);
            }
            expect(fundMe.getfunder(0)).to.be.reverted;
          });
          it("onlyowner test", async function () {
            const accounts = ethers.getSigners();
            attacker = accounts[1];
            fundmeconnectwallet = fundMe.connect(attacker);
            expect(fundMe.withdraw()).to.be.revertedWith("NotOwner");
          });

          it("cheaperwithdraw function works with multiple funders", async function () {
            //Arrange
            const startingcontractbalance = await ethers.provider.getBalance(
              await fundMe.getAddress()
            );
            const startingdeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            const accounts = await ethers.getSigners();
            for (i = 1; i < 10; i++) {
              const fundMeconnectedaccount = await fundMe.connect(accounts[i]);
              fundMe.fund({ value: sendval });
            }
            //Act
            const txresponse = await fundMe.cheaperwithdraw();
            const txreceipt = await txresponse.wait();
            const { gasPrice, gasUsed } = txreceipt;
            const gascost =
              BigInt(gasPrice.toString()) * BigInt(gasUsed.toString());
            //Assert
            const fundmeaddress = await fundMe.getAddress();
            const endcontractbalance = await ethers.provider.getBalance(
              fundmeaddress
            );
            const enddeployerbalance = await ethers.provider.getBalance(
              deployer.address
            );
            assert.equal(
              startingcontractbalance + startingdeployerbalance,
              enddeployerbalance + endcontractbalance + gascost
            );
            for (i = 1; i < 10; i++) {
              assert.equal(await fundMe.getamountfunded(accounts[i]), 0);
            }
            expect(fundMe.getfunder(0)).to.be.reverted;
          });
        });
      });
    });
