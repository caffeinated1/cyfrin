const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FunctionVisibilityExample", function () {
    let functionVisibility, childContract;
    
    before(async function () {
        const FunctionVisibilityExample = await ethers.getContractFactory("FunctionVisibilityExample");
        functionVisibility = await FunctionVisibilityExample.deploy(); // ✅ Deploy contract
        await functionVisibility.waitForDeployment(); // ✅ Wait for deployment

        const ChildContract = await ethers.getContractFactory("ChildContract");
        childContract = await ChildContract.deploy();
        await childContract.waitForDeployment();
    });

    it("Should return the sum from externalPureFunction", async function () {
        const result = await functionVisibility.externalPureFunction(5, 10);
        expect(result).to.equal(15);
    });

    it("Child contract should access parent internal function", async function () {
        const result = await childContract.accessParentViewFunction();
        expect(result).to.equal(42);
    });
});
