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
            <Flex>
                <NavBar />
                {children}
            </Flex>
        </Box>
    );
}

export default Layout;