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
import SortBy from '../SortbyComponent';

const itemInfo = {
    type: 1,
    img: 'item/img_glove.png',
    title: 'Admiral Gloves',
}

const ItemList = () => {
    return (
        <Flex flexDirection="column" w="100%" h="100%" ml="4rem">
            <Flex flexDirection="column">
                <FormLabel textColor="#fff" fontSize="32px" fontWeight="400" fontFamily="ArcadeClassic" mt="1.5rem" mb="1.5rem">WELCOME TO THE SATE MARKETPLACE</FormLabel>
                <FormLabel fontSize="16px" fontWeight="400" textColor="rgba(255, 255, 255, 0.4)">Here you can search and buy SATE with STARL to incorporate them into your metaverse</FormLabel>
            </Flex>
            <Flex w="100%" mt="1.5rem" justifyContent="space-between">
                <Flex alignItems="center">
                    <Text fontWeight="400" textColor="#fff" fontSize="24px" fontFamily="ArcadeClassic">NFTS FOR SALE</Text>
                    <Flex w="105px" h="40px" bg="#1d253f" ml="1.5rem" borderRadius="4px" alignItems="center">
                        <Text w="100%" textAlign="center" fontSize="12px" textColor="rgba(255, 255, 255, 0.26)">118 results</Text>
                    </Flex>
                </Flex>
                <Flex textColor="#bcc0c1" fontSize="14px" alignItems="center" justifyContent="flex-end">
                    <Text>Sort by</Text>
                    <Flex h="40px" ml="1rem">
                        <SortBy />
                    </Flex>
                </Flex>
            </Flex>
            <SimpleGrid columns={4} spacing={5} m="20px 0 30px 0">
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