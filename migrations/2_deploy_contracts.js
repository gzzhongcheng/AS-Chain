var ASCToken = artifacts.require('./ASCCoin.sol');

module.exports = function(deployer) {
  deployer.deploy(ASCToken);
}
