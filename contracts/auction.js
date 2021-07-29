import { ethers } from "ethers";
import abi from './auction.abi.json';
import { isTransactionMined } from "../lib/helper";

export async function placeBid(auction, tokenId, amount, signer) {
    const contract = new ethers.Contract(auction, abi, signer);
    const { hash } = await contract.placeBid(tokenId, amount);
    try {
        while (true) {
          let mined = await isTransactionMined(hash);
          if (mined) break;
        }
      } catch (e) {
        console.error(e);
        return "";
      }
      return hash;
}

export async function getAuction(auction, tokenId, signer) {
    try {
        const contract = new ethers.Contract(auction, abi, signer);
        const auctionInfo = await contract.auctions(tokenId);
        return auctionInfo;
    } catch (e) {
        console.error(e);
        return {};
    }
}