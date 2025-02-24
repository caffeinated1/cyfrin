require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: {
        version: "0.8.28", // Ensure this matches your contract
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
};
