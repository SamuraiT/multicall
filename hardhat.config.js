/** @type import('hardhat/config').HardhatUserConfig */
require('@typechain/hardhat')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.5.0",
  paths: {
    sources: "./src"
  }
}
