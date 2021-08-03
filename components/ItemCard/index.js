import React, { useRef, useState, useEffect } from 'react';
import {
    Flex,
    Image,
    Text,
    Spinner
} from '@chakra-ui/react';
import { ethers } from "ethers";
import { useRouter } from 'next/router';
import { useWallet } from 'use-wallet';
import { getAuction } from '../../contracts/auction';
import { getMetadata } from '../../contracts/sate';
import { getWalletAddress } from "../../lib/wallet";
import { SATE_AUCTION_ADDRESS, SATE_NFT_ADDRESS } from '../../utils/const';

const ItemCard = ({id}) => {

    const router = useRouter();
    const wallet = useWallet();
    const [networkId, setNetworkId] = useState(0);
    const [tokenInfo, setTokenInfo] = useState({});

    const loadData = async () => {
        //if (wallet && wallet.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            setNetworkId(network.chainId);
            const metadata = await getMetadata(SATE_NFT_ADDRESS[network.chainId], id, provider);

            if (!metadata) return;
            fetch(metadata)
            .then((response) => response.text())
            .then((infoResponse) => {
                try {
                    const jsonInfo = JSON.parse(infoResponse);

                    if (!jsonInfo || !jsonInfo.image || !jsonInfo.name || !jsonInfo.animation_url) {
                        throw new Error('Invalid json info');
                    }
                    setTokenInfo(jsonInfo);
                } catch (e) {
                    console.error('[INFO] Invalid tokenUri', metadata);
                }
            });

            
        //  }
    }

    useEffect(() => {
        loadData();
    }, [wallet]);

    const handleClick = e => {
        e.preventDefault();
        router.push(`/buyitem?id=${id}`);
    }

    if (!tokenInfo.name) {
        return (
            <Flex as="button" textAlign="left" border="none" w="100%" h="100%" p="2px" borderRadius="7px" bg="transparent" _hover={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} >
                <Flex flexDirection="column" w="100%" h="350px" bg="#0e1429" 
                    lineHeight="30px" borderRadius="6px" p="1rem" cursor="pointer"
                >
                    <Spinner size="xl" thickness="4px" color="blue.500" emptyColor="gray.600" m="auto" />
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex as="button" textAlign="left" border="none" onClick={handleClick} w="100%" h="100%" p="2px" borderRadius="7px" bg="transparent" _hover={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} >
            <Flex flexDirection="column" w="100%" h="100%" bg="#0e1429" 
                lineHeight="30px" borderRadius="6px" p="1rem" cursor="pointer"
            >
                <Flex mb="1rem" position="relative">
                    <Image src={`item/${tokenInfo.attributes[5].value}.png`} w="26px" h="36px" position="absolute" top="1rem" left="1.5rem" zIndex="100" alt="item type"></Image>
                    <Flex w="100%" h="100%" justifyContent="center">
                        <Flex w="100%">
                            <Image src={tokenInfo.image} w="100%" borderRadius="20px" />
                        </Flex>
                    </Flex>
                </Flex>
                <Text textColor="#fff" fontWeight="500" fontSize={["20px", "16px", "16px", "16px", "20px"]}>{tokenInfo.name}</Text>
                <Text textColor="rgba(255, 255, 255, 0.4)" fontSize={["15px", "12px", "12px", "12px", "15px"]}>{tokenInfo.attributes[5].value} Satellite</Text>
                <Flex alignItems="center">
                    <Image src="item/coin_logo.png" w={["20px", "16px", "16px", "16px", "20px"]} alt="coin logo"></Image>
                    <Text textColor="#FDB32A" fontSize={["15px", "12px", "12px", "12px", "15px"]} fontWeight="500" ml="0.5rem">2,940,350.00</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemCard;