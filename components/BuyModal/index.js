import {
    Flex,
    Box,
    Image,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    IconButton,
    NumberInput,
    NumberInputField
} from "@chakra-ui/react";
import {
    CloseIcon,
} from "@chakra-ui/icons";

import {
    placeBid
} from '../../contracts/auction';

import { useState, useEffect } from "react";
import { useWallet } from 'use-wallet';
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import {
    getBalance,
    approveToken,
    isTokenApproved
} from "../../contracts/starlink";
import {
    STARL_ADDRESS,
    SATE_AUCTION_ADDRESS,
} from "../../utils/const";
import {
    getWalletAddress
} from "../../lib/wallet";
import {
    getBigNumber
} from "../../lib/helper";

const BuyModal = (props) => {
    const wallet = useWallet();
    
    const [networkId, setNetworkId] = useState(0);
    const [approved, setApproved] = useState(false);
    const [pending, setPending] = useState(false);
    const [bidAmount, setBidAmount] = useState(0);

    const loadData = async () => {
        if (wallet && wallet.ethereum) {
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const network = await provider.getNetwork();
            setNetworkId(network.chainId);
            const walletAddr = await getWalletAddress(wallet);
            let balance = await getBalance(STARL_ADDRESS[network.chainId], walletAddr, provider);
            const approved = await isTokenApproved(STARL_ADDRESS[network.chainId], walletAddr, SATE_AUCTION_ADDRESS[network.chainId], balance, provider);
            setApproved(approved);
        }
    }

    useEffect(() => {
        if (wallet && wallet.ethereum) {
            loadData();
        }
    }, [wallet]);

    const clickPlaceBid = async () => {
        if (pending) return;

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer = await provider.getSigner();

        try {
            if (approved) {
                if (!bidAmount || !parseFloat(bidAmount)) return;
                setPending(true);
                await placeBid(SATE_AUCTION_ADDRESS[networkId], 1, getBigNumber(bidAmount), signer);
                setPending(false);
            } else {
                setPending(true);
                await approveToken(STARL_ADDRESS[networkId], SATE_AUCTION_ADDRESS[networkId], "115792089237316195423570985008687907853269984665640564039457584007913129639935", signer);
                setPending(false);
                setApproved(true);
            }
        } catch (e) {
            console.error(e);
            setPending(false);
        }
        
    };

    const onChangeAmount = (value) => {
        setBidAmount(value);
    }

    return (
        <Modal size="lg" isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay/>
            <ModalContent borderRadius="18px" bg="#0e1429">
                <IconButton
                    color="white"
                    icon={<CloseIcon/>}
                    position="absolute"
                    top="1rem"
                    right="0.5rem"
                    onClick={props.onClose}
                    bg="none"
                    fontSize="0.6rem"
                    _active={{}}
                    _focus={{}}
                    _hover={{}}
                />
                <Box mt="1.5rem" bg="#0e1429" borderTopRadius="18px">
                    <Text color="#fff" fontSize="20px" fontWeight="500" textAlign="center">
                        Place a bid
                    </Text>
                </Box>
                <Box
                    p="2rem"
                    bg="#0e1429"
                    borderBottomRadius="10px"
                >
                    <Text textColor="#fff" fontSize="17px">Bid Amount</Text>
                    <Flex alignItems="center" alignSelf="center" borderRadius="5px" h="100%" w="100%" bg="#171e3a" p="0.5rem" mt="1rem">
                        <Image alt="ico search" src="/item/coin_logo.png" w="20px" h="20px" m="0 0.5rem 0 0.5rem" />STARL
                        <NumberInput
                            textColor="white" ml="1rem" w="100%" _focus={{ outline: 'none'}} bg="#171e3a" border="none"
                            value={bidAmount}
                            onChange={onChangeAmount}
                        >
                            <NumberInputField _focus={{ outline: 'none'}} fontSize={["9px", "12px", "12px", "15px"]} border="none" placeholder="0.000"></NumberInputField>
                        </NumberInput>
                    </Flex>

                    <Flex w="100%" justifyContent="center">
                        <Flex as="button" onClick={clickPlaceBid} mt="3rem"  bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" borderRadius="15px"
                                _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} 
                                textColor="#fff" fontSize="13px" fontWeight="700"
                                w="50%" h="50px" alignItems="center" justifyContent="center">{approved ? "Place Bid" : "Approve"}</Flex>
                    </Flex>
                </Box>
            </ModalContent>
        </Modal>
    )
}

export default BuyModal;
