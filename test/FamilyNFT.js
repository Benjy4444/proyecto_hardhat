const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FamilyNFT contract", function () {
    let FamilyNFT;
    let familyNFT;
    let owner;
    let nonOwner;

    before(async function () {
        // Obtén las cuentas
        [owner, nonOwner] = await ethers.getSigners();
        
        // Obtén el contrato a partir de su fábrica
        FamilyNFT = await ethers.getContractFactory("FamilyNFT");
    });

    beforeEach(async function () {
        // Despliega un nuevo contrato antes de cada test
        familyNFT = await FamilyNFT.deploy(owner.address);
        await familyNFT.waitForDeployment();
    });

    it("should allow owner to mint", async function () {
        const uri = "https://example.com/nft";
        await familyNFT.safeMint(owner.address, uri);

        const balance = await familyNFT.balanceOf(owner.address);
        expect(balance).to.equal(1);

        const tokenURI = await familyNFT.tokenURI(0);
        expect(tokenURI).to.equal(uri);
    });

    it("should increment token ID on mint", async function () {
        await familyNFT.safeMint(owner.address, "https://example.com/nft1");
        await familyNFT.safeMint(owner.address, "https://example.com/nft2");

        const tokenURI1 = await familyNFT.tokenURI(0);
        const tokenURI2 = await familyNFT.tokenURI(1);

        expect(tokenURI1).to.equal("https://example.com/nft1");
        expect(tokenURI2).to.equal("https://example.com/nft2");
    });

    it("should not allow non-owner to mint", async function () {
        const uri = "https://example.com/nft";
        await expect(
            familyNFT.connect(nonOwner).safeMint(nonOwner.address, uri)
        ).to.be.revertedWith("Ownable: caller is not the owner");
    });
});
