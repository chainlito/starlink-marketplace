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

const Header = () => {
    return (
        <Flex w="100%" h="80px" bg="#1d253f" textColor="#fff" justifyContent="space-between">
            <Flex w="15%" justifyContent="center" alignSelf="center" >
                <Image src={"starlink_logo.png"} alignSelf="center" alt="ico" w="28px" h="28px"/>
                <Text fontWeight="400" fontSize="24px" ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex alignItems="center" alignSelf="center" bg="transparent" _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} borderRadius="6px" h="2.5rem" w="30%" p="2px">
                <Flex alignItems="center" alignSelf="center" borderRadius="5px" h="100%" w="100%" bg="#171e3a" p="0.5rem">
                    <Image alt="ico search" src="header/ico_search.png" m="0 1rem 0 0.5rem" />
                    <Input textColor="white" w="100%" _focus={{ outline: 'none' }} placeholder="Search" _placeholder={{ color: '#fff' }} bg="#171e3a" border="none" fontSize="15px"/>
                </Flex>
            </Flex>
            <Flex w="30%" justifyContent="space-between" alignSelf="center" >
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">HOME</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MARKET</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">CREATE</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MAP</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">ABOUT</Flex>
            </Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="space-evenly">
                <Flex w="5.5rem" justifyContent="center" alignItems="center">
                    <Image alt="ico lng" w="20px" h="20px" src="header/ico_lng.png" mr="0.5rem" />
                    <Text fontSize="16px" fontWeight="400" mr="1rem" >EN</Text>
                    <Image alt="arrow down" w="12px" h="8px" src="arrow_down.png" />
                </Flex>
                <Flex as="button" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} textColor="#fff" fontSize="13px" w="5.5rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
            </Flex>
        </Flex>
    );
}

export default Header;