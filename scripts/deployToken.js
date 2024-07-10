// scripts/deploy_token.js
// npx hardhat run scripts/deployToken.js

async function main() {
    // Obtén la cuenta de despliegue desde la configuración de Hardhat
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);

    // Muestra el balance de la cuenta de despliegue
    const balance = await deployer.provider.getBalance(deployer.address); //deployer.getBalance();
    
    console.log("Account balance:", ethers.utils.formatEther(balance), "ETH");

    // Obtén el contrato y despliegalo
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    // Espera a que el contrato se despliegue
    await token.deployed();

    // Muestra la dirección del contrato desplegado
    console.log("Token contract deployed to:", token.address);
}

// Llama a la función principal y gestiona posibles errores
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
