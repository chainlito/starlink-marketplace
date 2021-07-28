import {
    Flex,
    Box,
    Image,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    IconButton,
    Input,
} from "@chakra-ui/react";
import {
    CloseIcon,
} from "@chakra-ui/icons";

import {
    placeBid
} from '../../contracts/auction';

import { useState } from "react";
import { useWallet } from 'use-wallet';
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import { approveToken, checkAllowance } from "../../contracts/starlink";

const BuyModal = (props) => {

    const wallet = useWallet();

    const clickPlaceBid = async () => {

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer = await provider.getSigner();
        
        await placeBid(1, 0, signer);
    };

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
                    <Text color="#fff" fontSize="20px" fontWeight="500" textAlign="center">Place a bid</Text>
                </Box>
                <Box
                    p="2rem"
                    bg="#0e1429"
                    borderBottomRadius="10px"
                >
                    <Text textColor="#fff" fontSize="17px">Price</Text>
                    <Flex alignItems="center" alignSelf="center" borderRadius="5px" h="100%" w="100%" bg="#171e3a" p="0.5rem" mt="1rem">
                        <Image alt="ico search" src="/item/coin_logo.png" w="20px" h="20px" m="0 0.5rem 0 0.5rem" />STARL
                        <Input textColor="white" ml="1rem" w="100%" _focus={{ outline: 'none'}} placeholder="0.0000" _placeholder={{ color: '#fff' }} bg="#171e3a" border="none" fontSize="15px"/>
                    </Flex>

                    <Flex w="100%" justifyContent="center">
                        <Flex as="button" onClick={clickPlaceBid} mt="3rem"  bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" borderRadius="15px"
                                _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} 
                                textColor="#fff" fontSize="13px" fontWeight="700"
                                w="50%" h="50px" alignItems="center" justifyContent="center">Place Bid</Flex>
                    </Flex>
                </Box>
            </ModalContent>
        </Modal>
    )
}

export default BuyModal;
