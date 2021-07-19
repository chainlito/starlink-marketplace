import React from 'react';
import  {
    Flex,
    Text,
    FormLabel,
    Select,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';
import ItemCard from '../ItemCard';

const itemInfo = {
    type: 1,
    img: 'item/img_glove.png',
    title: 'Admiral Gloves',
}

const ItemList = () => {
    return (
        <Flex flexDirection="column" w="100%" h="100%" ml="4rem">
            <Flex flexDirection="column">
                <FormLabel textColor="#fff" fontSize="32px" fontWeight="400" fontFamily="ArcadeClassic" mt="1.5rem" mb="1.5rem">WELCOME TO THE NFT MARKETPLACE</FormLabel>
                <FormLabel fontSize="16px" fontWeight="400" textColor="rgba(255, 255, 255, 0.4)">Here you can search and buy creator's ASSETS with SAND to incorporate them into your LAND</FormLabel>
            </Flex>
            <Flex w="100%" mt="1.5rem" justifyContent="space-between">
                <Flex alignItems="center">
                    <Text fontWeight="400" textColor="#fff" fontSize="24px" fontFamily="ArcadeClassic">NFTS FOR SALE</Text>
                    <Flex w="105px" h="40px" bg="#1d253f" ml="1.5rem" borderRadius="4px">
                        <Text w="100%" textAlign="center" fontSize="12px" textColor="rgba(255, 255, 255, 0.26)">118 results</Text>
                    </Flex>
                </Flex>
                <Flex textColor="#bcc0c1" fontSize="14px" alignItems="center" justifyContent="flex-end">
                    <Text>Sort by</Text>
                    <Flex h="40px" ml="1rem" bg="transparent" _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} borderRadius="6px" alignItems="center" p="2px">
                        <Flex as="button" border="none" w="100%" h="100%" borderRadius="5px" justifyContent="center" alignItems="center" bg="#1e253f" p="0.5rem">
                            <Text fontSize="13px" textColor="#fff" fontWeight="400" mr="1rem" >Newest</Text>
                            <Image alt="arrow down" w="12px" h="8px" src="arrow_down.png" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <SimpleGrid columns={4} spacing={20} mt="20px">
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
                <ItemCard item={itemInfo} />
            </SimpleGrid>
        </Flex>
    ); 
}

export default ItemList;