import { ethers } from "ethers";

export const formatNumber = (x, decimals) => {
    const parts = x.toFixed(decimals + 1).split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts[0] + "." + parts[1]?.slice(0, decimals);
}

export const isTransactionMined = async (transactionHash) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const txReceipt = await provider.getTransactionReceipt(transactionHash);
    if (txReceipt && txReceipt.blockNumber) {
      return true;
    }
    return false;
}

export const getBigNumber = (source) => {
    const parts = source.split(".");
    console.log(parts)
    let decimals = 18;
    if (parts[1] && parts[1].length) decimals -= parts[1].length;
    let zero = "0";
    if (decimals < 0) return parts[0] + parts[1].slice(0, 18);
    return parts[0] + (parts[1]?parts[1]:"") + (zero.repeat(decimals));
}