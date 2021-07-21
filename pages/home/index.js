import React from 'react';
import {
    Flex,
    AspectRatio,
} from '@chakra-ui/react';

const Home = () => {
    return (
        <Flex w="100%" h="100%" opacity="0.5">
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '750px',
                    left: "50%",
                    top: "80px",
                    transform: "translate(-50%, 0px)",
                    objectFit: 'cover',
                    zIndex: '-1',
                }}
            >
                <source src="/STARL_Intro.mp4" type="video/mp4" />
            </video>
            <Flex h="750px"></Flex>
        </Flex>
    );
};

export default Home;