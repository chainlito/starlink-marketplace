import { 
    Box,
    Flex,
} from '@chakra-ui/react';
import React, { Component } from 'react';

import Header from '../Header';
import NavBar from '../NavBar';

const Layout = ({children}) => {

    return (
        <Box w="100%" h="100%">
            <Header />
            <Flex h="100%" ml="3rem">
                {children}
            </Flex>
        </Box>
    );
}

export default Layout;