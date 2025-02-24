// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract FunctionVisibilityExample {

    uint256 private myNumber = 42;

    //  Private view function - Only this contract can access it
    function _getSecretNumber() private view returns (uint256) {
        return myNumber;
    }

    //  External pure function - Cannot be accessed internally
    function externalPureFunction(uint256 a, uint256 b) external pure returns (uint256) {
        return a + b; // Simple pure function
    }

    //  Internal view function - Accessible to child contracts
    function getStoredNumber() internal view returns (uint256) {
        return myNumber;
    }

    //  Trying to call externalPureFunction from within the contract will fail
    function testExternalCall() public pure returns (uint256) {
        // return externalPureFunction(5, 10);  ERROR: External functions cannot be called internally
        return 0;
    }
}

//  Child contract inheriting the internal view function
contract ChildContract is FunctionVisibilityExample {
    function accessParentViewFunction() public view returns (uint256) {
        return getStoredNumber(); //  Allowed because `getStoredNumber` is internal
    }
}
