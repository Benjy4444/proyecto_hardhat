const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("Deploy FamilyNFT", async ({ deploy }) => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the FamilyNFT contract
  const familyNFT = await deploy("FamilyNFT", {
    from: deployer.address,
    args: [deployer.address], // Constructor arguments
    log: true,
  });

  console.log("FamilyNFT deployed to:", familyNFT.address);
});
