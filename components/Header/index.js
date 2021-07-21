import React, {useEffect, useState} from 'react';
import { 
    Flex,
    Image,
    Text,
    Link,
} from '@chakra-ui/react';

import CustomSearchbox from '../CustomSearchbox';
import LanguageSelector from '../LngSelector';
import ConnectModal from '../ConnectModal';
import { useWeb3Context } from 'web3-react';

const Header = () => {

    const context = useWeb3Context();
    const { account } = context;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        // if (!window.ethereum) {
            setIsOpen(true);
        // }
    };

    const cloesModal = () => {
        setIsOpen(false);
    };

    const walletConnected = () => {
        console.log({account});
        if (account) {
            return true;
        }
        return false;
    };

    const onDisconnect = async() => {

        const provider = window.web3.currentProvider;

        console.log({provider});

        if(provider.close) {
          await provider.close();
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            setIsOpen(false);
        }
    }, [account]);

    useEffect(() => {
        console.log({isOpen});
    },[isOpen]);

    return (
        <Flex w="100%" h="80px" bg="#1d253f" textColor="#fff" justifyContent="space-between">
            <Flex w="15%" justifyContent="center" alignSelf="center" >
                <Image src={"logo.ico"} alignSelf="center" alt="ico" w="30px" h="30px"/>
                <Text fontWeight="400" fontSize="20px" ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex w="30%" h="50px" alignItems="center" alignSelf="center"><CustomSearchbox /></Flex>
            <Flex w="20%" justifyContent="space-between" alignSelf="center" fontSize="12px" fontWeight="700" >
                <Link href="/home"><Flex textColor="#fff" cursor="pointer">HOME</Flex></Link>
                <Link href="/"><Flex textColor="#fff" cursor="pointer">MARKET</Flex></Link>
                <Flex textColor="#fff" cursor="pointer">CREATE</Flex>
                <Flex textColor="#fff" cursor="pointer">MAP</Flex>
                <Flex textColor="#fff" cursor="pointer">ABOUT</Flex>
            </Flex>
            <Flex w="1px" h="100%" bgColor="#2D3653"></Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="space-between">
                <Flex w="5.5rem" mr="1.5rem">
                    <LanguageSelector />
                </Flex>
                {walletConnected() ? (
                    <Flex as="button" onClick={onDisconnect} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize="13px" w="5.5rem" h="2rem" alignItems="center" justifyContent="center">WalletAddress</Flex>
                ) : (
                    <Flex as="button" onClick={openModal} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize="13px" w="5.5rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
                )}
            </Flex>
            <Flex w="1%"></Flex>
            <ConnectModal isOpen={isOpen} onClose={cloesModal}/>
        </Flex>
    );
}

export default Header;