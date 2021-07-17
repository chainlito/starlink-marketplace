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
            <Flex alignItems="center" alignSelf="center" borderRadius="6px" h="2.5rem" w="30%" bg="#171e3a" p="0.5rem">
                <InputGroup>
                    <InputLeftAddon 
                        pointerEvents="none"
                        children={<SearchIcon color="white"/>}
                        m={5}
                    />
                    <Input textColor="white" placeholder="Search" bg="#171e3a" border="none" fontSize="15px"/>
                </InputGroup>
            </Flex>
            <Flex w="30%" justifyContent="space-between" alignSelf="center" >
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">HOME</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MARKET</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">CREATE</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">MAP</Flex>
                <Flex textColor="#fff" fontWeight="400" fontSize="16px" cursor="pointer">ABOUT</Flex>
            </Flex>
            <Flex alignItems="center" alignSelf="center" w="15%" h="2.5rem" p="0.5rem" justifyContent="center">
                <Select w="5.5rem" textColor="white" iconSize="0" border="none" bg="transparent" fontSize="15px">
                    <option value="EN">En</option>
                    <option value="RU">Ru</option>
                    <option value="CN">Cn</option>
                </Select>
                <Flex as="button" fontSize="13px" w="5.5rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
            </Flex>
        </Flex>
    );
}

export default Header;