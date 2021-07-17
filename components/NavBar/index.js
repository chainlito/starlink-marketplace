import React from 'react';

import {
    Flex,
    Text
} from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Flex 
            flexDirection="column" w="100px" h="800px" bg="#1f273e" borderRadius="10px" p="15px"
            textColor="white" fontSize="10px" fontWeight="bold"
            justifyContent="space-between"
        >
            <Flex flexDirection="column">
                <Flex flexDirection="column" alignItems="center" mt="10px">
                    <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                    <Text>HOME</Text>
                </Flex>
                <Flex h="1px" w="90%" bg="#2a314b" alignSelf="center" />

                <Flex flexDirection="column" alignItems="center" mt="15px">
                    <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                    <Text>MARKET</Text>
                </Flex>
                <Flex h="1px" w="90%" bg="#2a314b" alignSelf="center" />

                <Flex flexDirection="column" alignItems="center" mt="15px">
                    <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                    <Text>CREATE</Text>
                </Flex>
                <Flex h="1px" w="90%" bg="#2a314b" alignSelf="center" />

                <Flex flexDirection="column" alignItems="center" mt="15px">
                    <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                    <Text>MAP</Text>
                </Flex>
                <Flex h="1px" w="90%" bg="#2a314b" alignSelf="center" />

                <Flex flexDirection="column" alignItems="center" mt="15px">
                    <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                    <Text>ABOUT</Text>
                </Flex>
                <Flex h="1px" w="90%" bg="#2a314b" alignSelf="center" />
            </Flex>

            <Flex flexDirection="column" alignItems="center">
                <Flex as="button" w="50px" h="50px" borderRadius="15px" border="none"></Flex>
                <Text>ME</Text>
            </Flex>
        </Flex>
    );
}

export default NavBar;