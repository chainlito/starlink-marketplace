import React, {useEffect, useState, useCallback} from 'react';
import { 
    Flex,
    Image,
    Text,
    Link,
} from '@chakra-ui/react';

import CustomSearchbox from '../CustomSearchbox';
import LanguageSelector from '../LngSelector';
import ConnectModal from '../ConnectModal';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';

const Header = () => {

    const wallet = useWallet();
    const [account, setAccount] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if (!account) {
            console.log("account is false");
            setIsOpen(true);
        }
    };

    const cloesModal = () => {
        setIsOpen(false);
    };

    const onDisconnect = () => {
        wallet.reset();
        setAccount(null);
    };

    useEffect(() => {
        if (wallet.status === 'connected') {
            const account = wallet.account;
            setAccount(account);
        } else {
            setAccount(null);
        }
    }, [wallet]);

    useEffect(() => {
        if (account) setIsOpen(false);
    }, [account])

    return (
        <Flex w="100%" h="80px" bg="#1d253f" textColor="#fff" justifyContent="space-between">
            <Flex w="15%" justifyContent="center" alignSelf="center" >
                <Image src={"logo.ico"} alignSelf="center" alt="ico" w="30px" h="30px"/>
                <Text fontWeight="400" fontSize="20px" ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex w="30%" h="50px" alignItems="center" alignSelf="center"><CustomSearchbox /></Flex>
            <Flex w="20%" justifyContent="space-between" alignSelf="center" fontSize="12px" fontWeight="700" >
                <Link href="/" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">HOME</Flex></Link>
                <Link href="/marketplace" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">MARKET</Flex></Link>
                <Flex textColor="#fff" cursor="pointer">CREATE</Flex>
                <Link href="/universe" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">UNIVERSE</Flex></Link>
                <Flex textColor="#fff" cursor="pointer">PLAY</Flex>
            </Flex>
            <Flex w="1px" h="100%" bgColor="#2D3653"></Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="space-between">
                <Flex w="5.5rem" mr="1.5rem">
                    <LanguageSelector />
                </Flex>
                {account ? (
                    <Flex as="button" onClick={onDisconnect} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" border="solid 1px" borderColor="rgba(255, 255, 255, 0.2)" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} style={{ "-webkit-background-clip": "text" }} textColor="transparent" fontWeight="700" fontSize="12px" w="6rem" h="2rem" borderRadius="1rem" alignItems="center" justifyContent="center">{account.substring(0, 4)}...{account.substring(account.length - 4, account.length)}</Flex>
                ) : (
                    <Flex as="button" onClick={openModal} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize="13px" w="6rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
                )}
            </Flex>
            <Flex w="1%"></Flex>
            <ConnectModal isOpen={isOpen} onClose={cloesModal}/>
        </Flex>
    );
}

export default Header;