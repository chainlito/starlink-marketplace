import React from 'react';
import {
    Flex,
    Image,
    Text,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

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
                            <Flex>News</Flex>
                            <Flex>Create</Flex>
                            <Flex>Market</Flex>
                            <Flex>Play</Flex>
                            <Flex>Whitepaper</Flex>
                            <Flex>FAQ</Flex>
                        </Flex>
                        <Flex flexDirection="column">
                            <Flex>Map</Flex>
                            <Flex>Sand</Flex>
                            <Flex>Press</Flex>
                            <Flex>Terms of use</Flex>
                            <Flex>One Pager</Flex>
                            <Flex>Social</Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w="30%" flexDirection="column" textColor="#fff" fontSize="16px">
                    <Text>SOCIAL</Text>
                    <VStack spacing={15} alignItems="flex-start">
                        <HStack spacing={15}>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="17px" h="20px" alt="social" src="footer/ico_fb.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_twitter.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_telegram.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_youtube.png" /></Flex>
                        </HStack>
                        <HStack spacing={15}>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_discord.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_m.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_instargram.png" /></Flex>
                            <Flex w="35px" h="35px" bg="#fff" borderRadius="10px" justifyContent="center" alignItems="center"><Image w="20px" h="20px" alt="social" src="footer/ico_message.png" /></Flex>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;