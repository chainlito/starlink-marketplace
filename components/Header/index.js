import React from 'react';
import { 
    Box,
    Flex,
    Image,
    Text,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
} from '@chakra-ui/react';

import { 
    SearchIcon
} from '@chakra-ui/icons';
import CustomSearchbox from '../CustomSearchbox';
import LanguageSelector from '../LngSelector';

const Header = () => {
    return (
        <Flex w="100%" h="80px" bg="#1d253f" textColor="#fff" justifyContent="space-between">
            <Flex w="15%" justifyContent="center" alignSelf="center" >
                <Image src={"logo.ico"} alignSelf="center" alt="ico" w="30px" h="30px"/>
                <Text fontWeight="400" fontSize="20px" ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex w="30%" h="2.5rem" alignItems="center" alignSelf="center"><CustomSearchbox /></Flex>
            <Flex w="30%" justifyContent="space-between" alignSelf="center" >
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">HOME</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MARKET</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">CREATE</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MAP</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">ABOUT</Flex>
            </Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="space-evenly">
                <Flex w="5.5rem" mr="1.5rem">
                    <LanguageSelector />
                </Flex>
                <Flex as="button" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize="13px" w="5.5rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
            </Flex>
        </Flex>
    );
}

export default Header;