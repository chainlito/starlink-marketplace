import { ethers } from "ethers";
import abi from './auction.abi.json';

const auction_address = "0xac82ffc8c3fd1171ecdda650670f29fb2e6f02d8";

export async function placeBid(tokenId, amount, signer) {
    try {
        const contract = new ethers.Contract(auction_address, abi, signer);
        const overrides = {
            gasLimit: 1,
            gasPrice: 2,
            value: ethers.utils.parseEther("0.01"),
        }
        await contract.placeBid(1, 0, overrides);
    } catch (e) {
        return {e};
    }
}