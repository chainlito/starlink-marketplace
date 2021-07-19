import React from 'react';
import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex w="100%" h="350px" bg="#060A1A">
            <Flex>
                <Image alt="logo" src="logo.ico" />
                <Text>STARLINK</Text>
            </Flex>
            <Flex flexDirection="column">
                PAGES
                <Flex>
                    <Text>New</Text>
                    <Text>Map</Text>
                </Flex>
                <Flex>
                    <Text>Create</Text>
                    <Text>Sand</Text>
                </Flex>
                <Flex>
                    <Text>Market</Text>
                    <Text>Press</Text>
                </Flex>
                <Flex>
                    <Text>Play</Text>
                    <Text>Terms of use</Text>
                </Flex>
                <Flex>
                    <Text>Whitepaper</Text>
                    <Text>One Pager</Text>
                </Flex>
                <Flex>
                    <Text>FAQ</Text>
                    <Text>Social</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column">
                SOCIAL
                <Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                </Flex>
                <Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                    <Flex><Image alt="social" src="" /></Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;