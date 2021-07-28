import { ethers } from "ethers";
import abi from './starlink.abi.json';

const starlink_address = "0x5a168798df2b9d84e28958702156b036927a9e29";

export async function checkAllowance(owner, sender, signer) {
    try {
        const contract = new ethers.Contract(starlink_address, abi, signer);
        const res = await contract.allowance(owner, sender);
        console.log({res});
        return res;
    } catch (e) {
        return {e};
    }
}

export async function approveToken(sender, amount, signer) {
    try {
        const contract = new ethers.Contract(starlink_address, abi, signer);
        const res = await contract.approve(sender, amount);
        console.log({res});
        return res;
    } catch (e) {
        return {e};
    }
}