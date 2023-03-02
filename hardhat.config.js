require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
    },
};
