// ignition/modules/FamilyNFT.js
//  npx hardhat ignition deploy ./ignition/modules/FamilyNFT.js

//Al ejecutar da el error: 

/* TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
at Object.moduleDefintionFunction (C:\Users\andre\OneDrive\Documentos\VSC_WS\CursoEducatEth2\
trabajo_entregable_nft\proyecto-hardhat\ignition\modules\FamilyNFT.js:6:24) */


const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FamilyNFTModule", (m) => {
    
    const { deployer } = ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Desplegar el contrato FamilyNFT
    const familyNFT = deploy("FamilyNFT", {
        from: deployer.address,
        args: [deployer.address], // Argumentos del constructor
        log: true,
    });

    console.log("FamilyNFT deployed to:", familyNFT.address);

    // Interactuar con el contrato si es necesario
    // Aquí puedes incluir más lógica si necesitas hacer algo después del despliegue
});
