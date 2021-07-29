import React, { useRef, useState, useEffect } from 'react';
import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { ethers } from "ethers";
import { useRouter } from 'next/router';
import { useWallet } from 'use-wallet';
import { getAuction } from '../../contracts/auction';
import { getWalletAddress } from "../../lib/wallet";
import { SATE_AUCTION_ADDRESS } from '../../utils/const';

const ItemCard = ({item}) => {

    const router = useRouter();
    const wallet = useWallet();
    const [networkId, setNetworkId] = useState(0);
    const [videoplay, setAutoPlay] = useState(false);
    const [metadata, setMetadata] = useState("");
    const videoref = useRef();

    const loadData = async () => {
        if (wallet && wallet.ethereum) {
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer = await provider.getSigner();
            const network = await provider.getNetwork();
            setNetworkId(network.chainId);
            const auctionInfo = await getAuction(SATE_AUCTION_ADDRESS[network.chainId], 1, signer);
        }
    }
       

    useEffect(() => {
        if (wallet && wallet.ethereum) {
            loadData();
        }
    }, [wallet]);

    const handleClick = e => {
        e.preventDefault();
        router.push('/buyitem');
    }

    const handleOver = e => {
        videoref.current.play();
    }

    const handleOut = e => {
        videoref.current.pause();
    }

    return (
        <Flex as="button" textAlign="left" border="none" onMouseOver={handleOver} onMouseLeave={handleOut} onClick={handleClick} w="100%" h="100%" p="2px" borderRadius="7px" bg="transparent" _hover={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} >
            <Flex flexDirection="column" w="100%" h="100%" bg="#0e1429" 
                lineHeight="30px" borderRadius="6px" p="1rem" cursor="pointer"
            >
                <Flex mb="1rem" position="relative">
                    <Image src="item/img_type.png" w="17px" h="17px" position="absolute" top="1rem" left="1.5rem" zIndex="100" alt="item type"></Image>
                    <Flex w="100%" h="100%" justifyContent="center">
                        <Flex w="100%">
                            <video ref={videoref} loop muted
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    opacity: '0.7',
                                }}
                            >
                                <source src="/defaultItem.mp4" type="video/mp4" />
                            </video>
                        </Flex>
                    </Flex>
                </Flex>
                <Text textColor="#fff" fontWeight="500" fontSize={["20px", "16px", "16px", "16px", "20px"]}>{item.title}</Text>
                <Text textColor="rgba(255, 255, 255, 0.4)" fontSize={["15px", "12px", "12px", "12px", "15px"]}>LEO</Text>
                <Flex alignItems="center">
                    <Image src="item/coin_logo.png" w={["20px", "16px", "16px", "16px", "20px"]} alt="coin logo"></Image>
                    <Text textColor="#FDB32A" fontSize={["15px", "12px", "12px", "12px", "15px"]} fontWeight="500" ml="0.5rem">2,940,350.00</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemCard;