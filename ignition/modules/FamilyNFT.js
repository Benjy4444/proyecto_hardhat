// ignition/modules/FamilyNFT.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Deploy FamilyNFT", async ({ deploy, execute, log }) => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Desplegar el contrato FamilyNFT
    const familyNFT = await deploy("FamilyNFT", {
        from: deployer.address,
        args: [deployer.address], // Argumentos del constructor
        log: true,
    });

    console.log("FamilyNFT deployed to:", familyNFT.address);

    // Interactuar con el contrato si es necesario
    // Aquí puedes incluir más lógica si necesitas hacer algo después del despliegue
});
