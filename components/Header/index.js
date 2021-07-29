import React, {useEffect, useState, useCallback} from 'react';
import { 
    Flex,
    Image,
    Text,
    Link,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

import {
    HamburgerIcon
} from "@chakra-ui/icons";

import CustomSearchbox from '../CustomSearchbox';
import LanguageSelector from '../LngSelector';
import ConnectModal from '../ConnectModal';
import { useWallet } from 'use-wallet';
import Web3 from 'web3';

const Header = () => {

    const wallet = useWallet();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    }, [account]);

    const onClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <Flex w="100%" h="80px" bg="#1d253f" textColor="#fff" justifyContent="space-between">
            <Flex w={["40%", "40%", "20%", "17%", "15%"]} minW="150px" justifyContent="center" alignSelf="center" >
                <Image src={"logo.ico"} alignSelf="center" alt="ico" w={["20px", "25px", "25px", "30px", "30px"]} h={["20px", "25px", "25px", "30px", "30px"]}/>
                <Text fontWeight="400" fontSize={["15px", "18px", "18px", "18px", "20px"]} ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex w={["50%","50%", "30%", "30%", "30%"]} display={["none", "none", "flex"]} h="50px" alignItems="center" alignSelf="center"><CustomSearchbox /></Flex>
            <Flex w="20%" justifyContent="space-between" alignSelf="center"
             display={['none', 'none', 'flex', 'flex', 'flex']}
             fontSize={["8px", "8px", "8px", "10px", "12px"]} fontWeight="700" >
                <Link href="/" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">HOME</Flex></Link>
                <Link href="/marketplace" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">MARKET</Flex></Link>
                <Flex textColor="#fff" cursor="pointer">CREATE</Flex>
                <Link href="/universe" _focus={{ border: 'none' }}><Flex textColor="#fff" cursor="pointer">UNIVERSE</Flex></Link>
                <Flex textColor="#fff" cursor="pointer">PLAY</Flex>
            </Flex>
            <Flex w="1px" h="100%" bgColor="#2D3653" display={['none', 'none', 'flex', 'flex', 'flex']}></Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="space-between"
             display={['none', 'none', 'flex', 'flex', 'flex']}
            >
                <Flex w={["3.5rem", "4rem", "5rem", "5.5rem", "5.5rem"]} mr="1.5rem">
                    <LanguageSelector />
                </Flex>
                {account ? (
                    <Flex as="button" onClick={onDisconnect} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" border="solid 1px" borderColor="rgba(255, 255, 255, 0.2)" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} style={{ "-webkit-background-clip": "text" }} textColor="transparent" fontWeight="700" fontSize={["8px", "8px", "8px", "10px", "12px"]} w="6rem" h="2rem" borderRadius="1rem" alignItems="center" justifyContent="center">{account.substring(0, 4)}...{account.substring(account.length - 4, account.length)}</Flex>
                ) : (
                    <Flex as="button" onClick={openModal} bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" minW="60px" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize={["8px", "8px", "8px", "10px", "12px"]} w="6rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
                )}
            </Flex>
            <Flex ml="auto" mr="0.5rem" display={["flex", "flex", "none", "none", "none"]}
                onClick={() => {
                    setIsMenuOpen(true);
                }}
            >
                <Flex w={["2.5rem", "3rem", "3rem", "5.5rem", "5.5rem"]} mr="1.5rem" ml="1.5rem" alignSelf="center">
                    <LanguageSelector />
                </Flex>
                <Flex cursor="pointer" userSelect="none"
                    onClick={() => {
                        setIsMenuOpen(true);
                    }}
                >
                    <HamburgerIcon fontSize="24px" m="auto 0"/>
                </Flex>
            </Flex>
            <Flex w="1%"></Flex>
            <ConnectModal isOpen={isOpen} onClose={cloesModal}/>
            <Drawer
                isOpen={isMenuOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay>
                <DrawerContent bg="#1d253f" color="#fff">
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Flex flexDirection="column" w="100%" display={["flex", "flex", "none", 'none', 'none']}>
                            <Link href="/" m="1.5rem 0 0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}>
                                <Text fontWeight="bold" fontSize="13px">HOME</Text>
                            </Link>
                            <Link href="/marketplace" m="0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}>
                                <Text fontWeight="bold" fontSize="13px">MARKET</Text>
                            </Link>
                            <Link m="0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}
                            >
                                <Text fontWeight="bold" fontSize="13px">CREATE</Text>
                            </Link>
                            <Link m="0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}
                            >
                                <Text fontWeight="bold" fontSize="13px">UNIVERSE</Text>
                            </Link>
                            <Link m="0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}
                            >
                                <Text fontWeight="bold" fontSize="13px">PLAY</Text>
                            </Link>
                            <Flex mt="1rem" mb="1rem" h="1px" w="100%" bg="rgba(255, 255, 255, 0.45)"></Flex>
                            <Link m="0.5rem 0" _hover={{opacity: 0.8}} transition="0.3s" _active={{}} _focus={{}}
                            >
                                <Text fontWeight="bold" fontSize="13px">SIGN IN</Text>
                            </Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Flex>
    );
}

export default Header;