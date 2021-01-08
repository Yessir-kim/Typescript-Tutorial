"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CyptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CyptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlcok = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlcok();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlcok, previousBlock) => {
    if (!Block.validateStructure(candidateBlcok))
        return false;
    else if (previousBlock.index + 1 !== candidateBlcok.index)
        return false;
    else if (previousBlock.hash !== candidateBlcok.previousHash)
        return false;
    else if (getHashforBlock(candidateBlcok) !== candidateBlcok.hash)
        return false;
    else
        return true;
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlcok()))
        blockchain.push(candidateBlock);
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
//# sourceMappingURL=index.js.map