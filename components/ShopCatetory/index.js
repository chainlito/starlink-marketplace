import React from 'react';
import {
    Flex,
    Text,
    FormLabel,
    Checkbox,
} from '@chakra-ui/react';
import CustomSwitch from '../CustomSwitch';
import CustomCheckbox from '../CustomCheckbox';

const ShopCategory = () => {
    return (
        <Flex w="400px" h="800px" borderRadius="10px" ml="200px" p="1.5rem"
            flexDirection="column"
        >
            <FormLabel fontSize="32px" fontWeight="400" textColor="#fff" >Marketplace</FormLabel>
            <Flex justifyContent="space-between" alignItems="center" mt="10px">
                <FormLabel textColor="#fff" fontSize="16px" fontWeight="400">On sale</FormLabel>
                <CustomSwitch />
            </Flex>

            <Flex h="1px" w="100%" bg="rgba(255, 255, 255, 0.1)" mt="10px" alignSelf="center" />

            <Flex flexDirection="column" h="100%" mt="20px" justifyContent="space-between">
                <Text textColor="#fff" fontWeight="400" cursor="pointer" fontSize="20px">FEATURED</Text>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Care Bears</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Atari</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Smurfs</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Binance</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>CoinMarketCap</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Avenged Sevenfold</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Gemini</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Uken Games</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>ZEPETO</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>F1 Delta Time</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Pranksy NFT Boxes</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>Deadmau5</Flex>
                <Flex alignItems="center" textColor="rgba(255, 255, 255, 0.5)" cursor="pointer" fontSize="16px" fontWeight="400"><CustomCheckbox/>FTX</Flex>
            </Flex>
        </Flex>
    );
};

export default ShopCategory;