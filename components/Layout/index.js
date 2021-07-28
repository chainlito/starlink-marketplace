import { 
    Box,
    Flex,
} from '@chakra-ui/react';
import { UseWalletProvider }  from "use-wallet";
import React, { Component } from 'react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({children}) => {

    const [path, setpath] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const currentRoute = router.pathname;
        setpath(currentRoute);
    }, [router]);

    return (
        <Box w="100%" h="100%">
            <Header />
            <Flex h="100%" ml="3rem">
                {children}
            </Flex>
            {path != '/marketplace' && 
                <Footer />
            }
        </Box>
    );
}

export default Layout;