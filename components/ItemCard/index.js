import React from 'react';
import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';

const ItemCard = ({item}) => {
    return (
        <Flex flexDirection="column" w="100%" h="100%" bg="#0e1429" 
            lineHeight="0" borderRadius="6px" p="1rem" borderWidth="2px" borderColor="transparent" borderStyle="solid"
            cursor="pointer" _hover={{ borderColor: "#fff" }}
        >
            <Flex>
                <Image src="item/img_type.png" w="17px" h="17px" alt="item type"></Image>
                <Image src="item/img_glove.png" w="130px" h="130px" alt="item image"></Image>
            </Flex>
            <Text textColor="#fff" fontWeight="500" fontSize="20px">{item.title}</Text>
            <Text textColor="rgba(255, 255, 255, 0.4)" fontSize="15px">8/10</Text>
            <Flex alignItems="center">
                <Image src="item/coin_logo.png" w="20px" h="20px" alt="coin logo"></Image>
                <Text textColor="#FDB32A" fontSize="15px" fontWeight="500" ml="0.5rem">2940.00</Text>
            </Flex>
        </Flex>
    );
};

export default ItemCard;