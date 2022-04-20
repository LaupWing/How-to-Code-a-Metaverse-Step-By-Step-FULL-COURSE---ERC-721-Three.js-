const Migrations = artifacts.require("Land");

module.exports = function (deployer) {
   deployer.deploy(Migrations);
};
