const hre = require("hardhat");

async function main() {
    const Animals = await hre.ethers.getContractFactory("Animals");
    const animals = await Animals.deploy();
    await animals.waitForDeployment();
    console.log("Animals contract deployed to:", await animals.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
