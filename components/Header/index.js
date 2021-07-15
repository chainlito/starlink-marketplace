import React from 'react';
import { 
    Box,
    Flex,
    Image,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputLeftAddon,
    Stack,
    Select,
} from '@chakra-ui/react';

import { 
    SearchIcon
} from '@chakra-ui/icons';

const Header = () => {
    return (
        <Flex w="100%" h="70px" bg="#1e253f" textColor="#fff" justifyContent="space-between">
            <Flex alignItems="center" alignSelf="center" h="2.5rem" ml="3rem">
                <Image src={"favicon.ico"} alt="ico" h="2.5rem"/>
                <Text fontWeight="bold" ml="0.5rem">STARLINK</Text>
            </Flex>
            <Flex alignItems="center" alignSelf="center" h="2.5rem" w="30%" bg="#171e3a" p="0.5rem">
                <InputGroup>
                    <InputLeftAddon 
                        pointerEvents="none"
                        children={<SearchIcon color="white"/>}
                        m={5}
                    />
                    <Input textColor="white" placeholder="Search" bg="#171e3a" border="none" fontSize="17px"/>
                </InputGroup>
            </Flex>
            <Flex alignItems="center" alignSelf="center" w="25%" h="2.5rem" p="0.5rem" justifyContent="center">
                <Select w="7.5rem" textColor="white" iconSize="0" border="none" bg="transparent" fontSize="17px">
                    <option value="EN">EN</option>
                    <option value="RU">RU</option>
                    <option value="CN">CN</option>
                </Select>
                <Flex as="button" fontSize="13px" w="7.5rem" h="2rem" alignItems="center" justifyContent="center">SIGN IN</Flex>
            </Flex>
        </Flex>
    );
}

export default Header;