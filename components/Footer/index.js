import React from 'react';
import {
    Flex,
    Image,
    Text,
    VStack,
    HStack,
    Link,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import Socialbutton from '../SocialButton';

const Footer = () => {
    return (
        <Flex w="100%" h="200px" bg="#060A1A">
            <Flex w="100%" h="100%" pt="50px" justifyContent="space-between">
                <Flex w="35%" h="40px" alignItems="center" justifyContent="center">
                    <Image alt="logo" src="logo.ico" w="30px" h="30px"/>
                    <Text textColor="#fff" fontWeight="400" fontSize="20px" ml="0.5rem" justifyContent="center">STARLINK</Text>
                </Flex>
                <Flex w="15%" flexDirection="column" textColor="#fff" fontSize="16px">
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
                <Flex w="30%" flexDirection="column" textColor="#fff" fontSize="16px">
                    <Text>SOCIAL</Text>
                    <VStack spacing={15} alignItems="flex-start" mt="0.5rem">
                        <HStack spacing={15}>
                            <Link href="/"><Flex w="35px" h="35px"><Socialbutton network="facebook" /></Flex></Link>
                            <Link href="https://twitter.com/starlinketh"><Flex w="35px" h="35px"><Socialbutton network="twitter" /></Flex></Link>
                            <Link href="https://t.me/Starlinkofficial"><Flex w="35px" h="35px"><Socialbutton network="telegram" /></Flex></Link>
                            <Link href="/"><Flex w="35px" h="35px"><Socialbutton network="youtube" /></Flex></Link>
                        </HStack>
                        <HStack spacing={15}>
                            {/* <Flex w="35px" h="35px"><Socialbutton network="discord" /></Flex> */}
                            <Link href="https://discord.gg/dAt6W4NtXz"><Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_discord.png" /></Flex></Link>
                            <Link href="https://starlinkmeta.medium.com/"><Flex w="35px" h="35px"><Socialbutton network="medium" /></Flex></Link>
                            <Link href="/"><Flex w="35px" h="35px"><Socialbutton network="instagram" /></Flex></Link>
                            <Link href="/"><Flex w="35px" h="35px"><Socialbutton network="twitch" /></Flex></Link>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;