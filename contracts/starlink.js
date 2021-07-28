import { ethers } from "ethers";
import abi from './auction.abi.json';

const auction_address = "0xac82ffc8c3fd1171ecdda650670f29fb2e6f02d8";

export async function allowance(tokenId, amount, signer) {
    try {
        const contract = new ethers.Contract(auction_address, abi, signer);
        await contract.placeBid(tokenId, amount, { gasLimit: 35000 });
    } catch (e) {
        return {e};
    }
}