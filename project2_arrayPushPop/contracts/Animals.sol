// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Animals {
    string[] public animalList;

    function addAnimal(string memory _animal) public {
        animalList.push(_animal);
    }

    function viewAnimals() public view returns (string[] memory) {
        return animalList;
    }
}


