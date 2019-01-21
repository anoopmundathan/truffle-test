var SampleToken = artifacts.require("./sampleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SampleToken);
};
