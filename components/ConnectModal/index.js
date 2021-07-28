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

import { useWallet } from 'use-wallet';

const ConnectModal = (props) => {

    const wallet = useWallet(); 

    const connectWallet = (connector) => {
        console.log({connector});
        wallet.connect(connector).then(res => {
            console.log({res});
            if (res) console.log({res});
        })
        .catch(e => {

        });
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
