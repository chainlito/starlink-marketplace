import React from 'react';
import {
    Flex,
    Image,
    Text,
    VStack,
    HStack,
    Stack,
    Link,
} from '@chakra-ui/react';
import Socialbutton from '../SocialButton';

const Footer = () => {
    return (
        <Flex w="100%" bg="#060A1A">
            <Flex w="100%" h="100%" p="50px" justifyContent="space-between">
                <Flex w={["35%", "35%", "35%", "30%", "30%"]} h="40px" alignItems="center" justifyContent="center">
                    <Image alt="logo" src="logo.ico" w="30px" h="30px"/>
                    <Text textColor="#fff" fontWeight="400" fontSize="20px" ml="0.5rem" justifyContent="center">STARLINK</Text>
                </Flex>
                <Stack w="50%" direction={["column", "column", "row", "row", "row"]} spacing="50" mt="7px">
                    <Flex w={["100%", "60%", "35%", "30%", "20%"]} flexDirection="column" textColor="#fff" fontSize="16px">
                        <Text>PAGES</Text>
                        <Flex textColor="rgba(255, 255, 255, 0.5)" fontSize="14px" lineHeight="35px" justifyContent="space-between">
                            <Flex flexDirection="column">
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>Home</Flex>
                                </Link>
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>Market</Flex>
                                </Link>
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>Create</Flex>
                                </Link>
                            </Flex>
                            <Flex flexDirection="column">
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>Universe</Flex>
                                </Link>
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>Play</Flex>
                                </Link>
                                <Link href="https://www.starltoken.com/whitepaper.pdf" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }} isExternal>
                                    <Flex _hover={{ color: '#fff' }}>Whitepaper</Flex>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" textColor="#fff" fontSize="16px">
                        <Text>SOCIAL</Text>
                        <VStack spacing={15} alignItems="flex-start" mt="0.5rem">
                            <HStack spacing={["2", "13", "15", "15", "15"]}>
                                <Flex as="button" onClick={() => window.location.href="/"} w="35px" h="35px"><Socialbutton network="facebook" /></Flex>
                                <Flex as="button" onClick={() => window.location.href="https://twitter.com/starlinketh"} w="35px" h="35px"><Socialbutton network="twitter"/></Flex>
                                <Flex as="button" onClick={() => window.location.href="https://t.me/Starlinkofficial"} w="35px" h="35px"><Socialbutton network="telegram"/></Flex>
                                <Flex as="button" onClick={() => window.location.href="/"} w="35px" h="35px"><Socialbutton network="youtube" /></Flex>
                            </HStack>
                            <HStack spacing={["2", "13", "15", "15", "15"]}>
                                <Link href="https://discord.gg/dAt6W4NtXz"><Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_discord.png" /></Flex></Link>
                                <Flex as="button" onClick={() => window.location.href="https://starlinkmeta.medium.com/"} w="35px" h="35px"><Socialbutton network="medium" /></Flex>
                                <Flex as="button" onClick={() => window.location.href="/"} w="35px" h="35px"><Socialbutton network="instagram" /></Flex>
                                <Flex as="button" onClick={() => window.location.href="/"} w="35px" h="35px"><Socialbutton network="twitch" /></Flex>
                            </HStack>
                        </VStack>
                    </Flex>
                </Stack>
            </Flex>
        </Flex>
    );
}

export default Footer;