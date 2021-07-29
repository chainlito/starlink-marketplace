import { ethers } from "ethers";
import abi from './auction.abi.json';
import { isTransactionMined } from "../lib/helper";


export async function getMetadata(nft, tokenId, signer) {
    try {
        const contract = new ethers.Contract(nft, abi, signer);
        const metadata = await contract.tokenURI(tokenId);
        return metadata;
    } catch (e) {
        console.error(e);
        return "";
    }
}