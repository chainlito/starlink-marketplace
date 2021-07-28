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
        <Flex w="100%" h="350px" bg="#060A1A">
            <Flex w="100%" h="100%" pt="50px" justifyContent="space-between">
                <Flex w="35%" h="40px" alignItems="center" justifyContent="center">
                    <Image alt="logo" src="logo.ico" w="30px" h="30px"/>
                    <Text textColor="#fff" fontWeight="400" fontSize="20px" ml="0.5rem" justifyContent="center">STARLINK</Text>
                </Flex>
                <Flex w="15%" flexDirection="column" textColor="#fff" fontSize="16px">
                    <Text>PAGES</Text>
                    <Flex textColor="rgba(255, 255, 255, 0.5)" fontSize="14px" lineHeight="35px" justifyContent="space-between">
                        <Flex flexDirection="column">
                            <Flex _hover={{ color: '#fff' }}>News</Flex>
                            <Flex _hover={{ color: '#fff' }}>Create</Flex>
                            <Flex _hover={{ color: '#fff' }}>Market</Flex>
                            <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                <Flex _hover={{ color: '#fff' }}>Play</Flex></Link>
                            <Link href="https://www.starltoken.com/whitepaper.pdf" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }} isExternal>
                                <Flex _hover={{ color: '#fff' }}>Whitepaper</Flex></Link>
                                <Link href="/" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                                    <Flex _hover={{ color: '#fff' }}>FAQ</Flex></Link>
                        </Flex>
                        <Flex flexDirection="column">
                            <Flex _hover={{ color: '#fff' }}>Map</Flex>
                            <Flex _hover={{ color: '#fff' }}>Starl</Flex>
                            <Flex _hover={{ color: '#fff' }}>Press</Flex>
                            <Flex _hover={{ color: '#fff' }}>Terms of use</Flex>
                            <Link href="https://installers.sandbox.game/The_Sandbox_One_Pager_2020.pdf" style={{ textDecoration: 'none' }} _focus={{ border: 'none' }} isExternal><Flex _hover={{ color: '#fff' }}>One Pager</Flex></Link>
                            <Flex _hover={{ color: '#fff' }}>Social</Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w="30%" flexDirection="column" textColor="#fff" fontSize="16px">
                    <Text>SOCIAL</Text>
                    <VStack spacing={15} alignItems="flex-start" mt="0.5rem">
                        <HStack spacing={15}>
                            <Flex w="35px" h="35px"><Socialbutton network="facebook" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="twitter" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="telegram" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="youtube" /></Flex>
                        </HStack>
                        <HStack spacing={15}>
                            {/* <Flex w="35px" h="35px"><Socialbutton network="discord" /></Flex> */}
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_discord.png" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="medium" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="instagram" /></Flex>
                            <Flex w="35px" h="35px"><Socialbutton network="twitch" /></Flex>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;