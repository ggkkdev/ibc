const IBCHandler = artifacts.require("@hyperledger-labs/yui-ibc-solidity/OwnableIBCHandler");
const IBCClient = artifacts.require("@hyperledger-labs/yui-ibc-solidity/IBCClient");
const Minitoken = artifacts.require("MiniToken");

module.exports = async (callback) => {
    const accounts = await web3.eth.getAccounts();
    const alice = accounts[1];
    const mintAmount = 100;
    const minitoken = await Minitoken.deployed();
    const ibcClient = await IBCClient.deployed();
    const ibcHandler = await IBCHandler.deployed();
    const res=await minitoken.test();
    const res2=await ibcClient.test2()
    const res3= await ibcHandler.getExpectedTimePerBlock()
    const res4= await web3.eth.getCode(ibcHandler.address, "latest")

    console.log(res)
    console.log(res2)
    console.log(res3)
    console.log(ibcHandler.address)
    console.log(res4)
    console.log("he")
    callback();
};
