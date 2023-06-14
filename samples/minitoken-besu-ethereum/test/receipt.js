const IBCHandler = artifacts.require("@hyperledger-labs/yui-ibc-solidity/OwnableIBCHandler");
const IBCClient = artifacts.require("@hyperledger-labs/yui-ibc-solidity/IBCClient");
const Minitoken = artifacts.require("MiniToken");

module.exports = async (callback) => {
    const accounts = await web3.eth.getAccounts();
    //console.log(await web3.eth.getTransactionReceipt("0x184bb27f084763a4d0edb30460813f98323ecaf4bb276b87cf164afbea074e51"))
    await web3.eth.sendTransaction({
        from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        to: "0x32886fb278B78128541937592b9701c9fC6AeF7e",
        value: web3.utils.toWei("100", "ether")
    })
    console.log(web3.eth.g)
    callback();
};
