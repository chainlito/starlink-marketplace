import React from 'react';
import {
    Flex,
    Text,
} from '@chakra-ui/react';

const Home = () => {
    return (
        <Flex bg="transparent" w="100%" h="100%">
            <Flex w="100%" h="750px">
                <Flex flexDirection="column" bg="rgba(22,25,30,0.7)" h="300px" ml="5rem" borderRadius="20px" alignSelf="center" p="30px 50px 30px 50px">
                    <Text fontSize="25px" textColor="#0084ff" fontWeight="700">Welcome To</Text>
                    <Text fontSize="60px" textColor="white" fontWeight="700">THE STARLINK</Text>
                    <Text fontSize="15px" maxW="350px" textColor="white">The First Gamified 3D Space Metaverse</Text>
                    <Flex justifyContent="space-between" mt="1.5rem">
                        <Flex as="button"  bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" borderRadius="25px"
                            _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }} 
                            textColor="#fff" fontSize="13px" fontWeight="700"
                            w="100%" h="50px" alignItems="center" justifyContent="center">Join Sale</Flex>
                        <Flex w="100px"></Flex>
                        <Flex as="button"
                            bg="#131A32" borderRadius="25px" border="solid 2px" borderColor="#1C2441"
                            _focus={{ borderColor: '#314DFF' }} _hover={{ borderColor: '#314DFF' }}
                            textColor="#fff" fontSize="13px" fontWeight="700"
                            w="100%" h="50px" alignItems="center" justifyContent="center">Buy STARL</Flex>
                    </Flex>
                </Flex>
            </Flex>
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
                    opacity: '0.5',
                }}
            >
                <source src="/STARL_Intro.mp4" type="video/mp4" />
            </video>
        </Flex>
    );
};

export default Home;