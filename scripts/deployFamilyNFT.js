// scripts/deployFamilyNFT.js
// npx hardhat run scripts/deployFamilyNFT.js

//supuestamente funciona pero no muestra el contrato donde se despliega (deployea?) el contrato... línea 17...
// tira mensaje "FamilyNFT contract deployed to: undefined"

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.provider.getBalance(deployer.address);
    console.log("Account balance:", balance.toString());

    const FamilyNFT = await ethers.getContractFactory("FamilyNFT");
    const initialOwner = "0x9078d38e512a68d6E6Cf26D413C02F88789Cc720"; //deployer.address; // Puedes cambiar esto por la dirección deseada
    const familyNFT = await FamilyNFT.deploy(initialOwner);

    console.log("FamilyNFT contract deployed to:", familyNFT.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
