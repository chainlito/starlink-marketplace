import {
    Flex,
    Box,
    Image,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    IconButton,
} from "@chakra-ui/react";
import {
    CloseIcon,
} from "@chakra-ui/icons";
import Web3 from 'web3';
import Web3Modal from 'web3modal';

import CustomCheckbox from '../CustomCheckbox';

import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import Portis from '@portis/web3';
import { useState } from "react";

import { useWallet } from 'use-wallet';

const ConnectModal = (props) => {

    const wallet = useWallet();
    const [showModal, setShowModal] = useState(props.isOpen);

    const connectWallet = (connector) => {
        wallet.connect(connector).then(res => {
            if (res) console.log({res});
        })
        .catch(e => {

        });
    }

    const connectWalletWithModal = async(wallet) => {
        const web3Modal = new Web3Modal({
            providerOptions: {
                cacheProvider: true,
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: '16d62dee5d09404dac52b6933c58a000'
                    }
                },
                fortmatic: {
                    package: Fortmatic,
                    options: {
                        key: "pk_live_6D08A510AD752EA5",
                    }
                },
                portis: {
                    package: Portis,
                    options: {
                        id: 'f67b5688-d623-4826-8f2c-160b51a09b38',
                    }
                }
            }
        });

        const provider = await web3Modal.connectTo(wallet);

        const web3 = new Web3(provider);
        const connected = await web3.eth.getAccounts();
        
        if (connected) {
            window.localStorage.setItem('connected', connected);
            setShowModal(false);
        }
        console.log({connected});
    }

    const connectMetaMaskWeb3Modal = () => {
        const providerOptions = {};
    
        const web3Modal = new Web3Modal({
            cacheProvider: false, // optional
            providerOptions, // required
            disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        });

        return web3Modal;
    }

    const connectWalletLinkWeb3Modal = () => {
        const infuraId = "16d62dee5d09404dac52b6933c58a000";
        const providerOptions = {
            walletlink: {
                package: WalletLink,
                options: {
                    appName: 'starlink-marketplace',
                    infuraId,
                    chainId: 1,
                    appLogoUrl: null,
                    darkMode: false,
                    rpc: "",
                },
            }
        };
    
        const web3Modal = new Web3Modal({
            cacheProvider: false, // optional
            providerOptions, // required
            disableInjectedProvider: true, // optional. For MetaMask / Brave / Opera.
        });

        return web3Modal;
    }

    return (
        <Modal size="sm" isOpen={props.isOpen} onClose={props.onClose}>
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
                <Box ml="1.5rem" mt="1.5rem" bg="#0e1429" borderTopRadius="18px">
                    <Text color="#fff" fontSize="20px" fontWeight="bold">Connect Wallet</Text>
                </Box>
                <Box
                    p="1.5rem"
                    bg="#0e1429"
                    borderBottomRadius="10px"
                >
                    <Flex
                        flexDirection="row"
                        p="1rem"
                        transition="0.3s"
                        borderRadius="16px"
                        bg="transparent"
                        alignItems="flex-start"
                        border="solid 1px"
                        borderColor="rgba(255, 255, 255, 0.2)"
                    >
                        <Flex mt="0.1rem"><CustomCheckbox bg="#0e1429" /></Flex>
                        <Box ml="0.5rem" fontSize="16px" fontWeight="500" color="#fff">I have read, understand, and agree to the <Text as="u" cursor="pointer" color="#13B0E5" href="#">Terms of Service.</Text></Box>
                    </Flex> 
                    <Flex
                        flexDirection="row"
                        cursor="pointer"
                        onClick={() => connectWallet('injected')}
                        p="1px"
                        transition="0.3s"
                        _hover={{
                            bg: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)",
                            transition: "0.3s"
                        }}
                        borderRadius="16px"
                        bg="rgba(255, 255, 255, 0.1)"
                        mt="1rem"
                        maxH="4rem"
                    >
                        <Flex w="100%" h="100%" p="1rem" bg="#0e1429" borderRadius="15px">
                            <Image alt="wallet" src="/wallets/metamask.png" w="1.5rem" m="auto 0"/>
                            <Flex flexDirection="column" m="auto 0 auto 2rem">
                                <Text fontSize="16px" fontWeight="500" color="#fff">MetaMask</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection="row"
                        cursor="pointer"
                        onClick={() => connectWallet('walletconnect')}
                        p="1px"
                        transition="0.3s"
                        _hover={{
                            bg: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)",
                            transition: "0.3s"
                        }}
                        borderRadius="16px"
                        bg="rgba(255, 255, 255, 0.1)"
                        mt="1rem"
                        maxH="4rem"
                    >
                        <Flex w="100%" h="100%" p="1rem" bg="#0e1429" borderRadius="15px">
                            <Image alt="wallet" src="/wallets/walletConnectIcon.svg" w="1.5rem" m="auto 0"/>
                            <Flex flexDirection="column" m="auto 0 auto 2rem">
                                <Text fontSize="16px" fontWeight="500" color="#fff">WalletConnect</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection="row"
                        cursor="pointer"
                        onClick={() => connectWallet('walletlink')}
                        p="1px"
                        transition="0.3s"
                        _hover={{
                            bg: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)",
                            transition: "0.3s"
                        }}
                        borderRadius="17px"
                        bg="rgba(255, 255, 255, 0.1)"
                        mt="1rem"
                        maxH="4rem"
                    >
                        <Flex w="100%" h="100%" p="1rem" bg="#0e1429" borderRadius="16px">
                            <Image alt="wallet" src="/wallets/coinbaseWalletIcon.svg" w="1.5rem" m="auto 0"/>
                            <Flex flexDirection="column" m="auto 0 auto 2rem">
                                <Text fontSize="16px" fontWeight="500" color="#fff">Coinbase Wallet</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection="row"
                        cursor="pointer"
                        onClick={() => connectWallet('fortmatic')}
                        p="1px"
                        transition="0.3s"
                        _hover={{
                            bg: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)",
                            transition: "0.3s"
                        }}
                        borderRadius="16px"
                        bg="rgba(255, 255, 255, 0.1)"
                        mt="1rem"
                        maxH="4rem"
                    >
                        <Flex w="100%" h="100%" p="1rem" bg="#0e1429" borderRadius="15px">
                            <Image alt="wallet" src="/wallets/fortmaticIcon.png" w="1.5rem" m="auto 0"/>
                            <Flex flexDirection="column" m="auto 0 auto 2rem">
                                <Text fontSize="16px" fontWeight="500" color="#fff">Fortmatic</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection="row"
                        cursor="pointer"
                        onClick={() => connectWallet('portis')}
                        p="1px"
                        transition="0.3s"
                        _hover={{
                            bg: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)",
                            transition: "0.3s"
                        }}
                        borderRadius="16px"
                        bg="rgba(255, 255, 255, 0.1)"
                        mt="1rem"
                        maxH="4rem"
                    >
                        <Flex w="100%" h="100%" p="1rem" bg="#0e1429" borderRadius="15px">
                            <Image alt="wallet" src="/wallets/portisIcon.png" w="1.5rem" m="auto 0"/>
                            <Flex flexDirection="column" m="auto 0 auto 2rem">
                                <Text fontSize="16px" fontWeight="500" color="#fff">Portis</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </ModalContent>
        </Modal>
    )
}

export default ConnectModal;
