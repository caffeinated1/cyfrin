const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Animals Contract", function () {
    let Animals, animals;

    before(async function () {
        Animals = await ethers.getContractFactory("Animals");
        animals = await Animals.deploy();
        await animals.waitForDeployment();
    });

    it("Should add an animal", async function () {
        await animals.addAnimal("Lion");
        const storedAnimals = await animals.viewAnimals();
        expect(storedAnimals.length).to.equal(1);
        expect(storedAnimals[0]).to.equal("Lion");
    });
});
