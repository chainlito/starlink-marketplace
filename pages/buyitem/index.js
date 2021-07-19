import React from 'react';
import {
    Flex,
    Text,
    Image,
    FormLabel,
    ListItem,
    List,
} from '@chakra-ui/react';

const BuyItem = () => {
    return (
        <Flex w="100%" h="100%">
            {/* <Flex flexDirection="column">
                <Image alt="ico-twitter"></Image>
                <Image alt="ico-facebook"></Image>
            </Flex> */}
            <Flex w="500px" h="600px">
                <Image alt="asset image" w="300px" h="300px" src="buyitem/img_item.png"></Image>
            </Flex>
            <Flex flexDirection="column">
                <FormLabel fontSize="42px" textColor="#fff" fontWeight="400">ADMIRAL GLOVES</FormLabel>
                <Flex>
                    <FormLabel fontSize="16px" fontWeight="400" textColor="#1365F1">Token ID: 5334...4096</FormLabel>
                    <Image alt="copy addr" w="20px" h="20px" src="buyitem/ico_addr_copy.png" />
                </Flex>
                <Flex>
                    <Image alt="creator avatar" w="50px" h="50px" src="buyitem/img_profile.png"></Image>
                    <Flex flexDirection="column">
                        <FormLabel fontSize="12px" fontWeight="400" textColor="rgba(255, 255, 255, 0.4)">BY CREATOR</FormLabel>
                        <FormLabel fontSize="16px" fontWeight="400" textColor="#fff">@KamiSawZe</FormLabel>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex>
                        <Image alt="ico copy" w="15px" h="15px" src="buyitem/ico_copy.png"></Image>
                        <Text>11 Minted</Text>
                    </Flex>
                    <Flex>
                        <Image alt="ico mark" w="15px" h="15px" src="buyitem/ico_note.png"></Image>
                        <Text>8 of 10 For sale</Text>
                    </Flex>
                    <Flex>
                        <Image alt="ico profile" w="20px" h="15px" src="buyitem/ico_network.png"></Image>
                        <Text>3 Owners</Text>
                    </Flex>
                </Flex>
                {/* ---------------------------------------------------------------------------------- */}
                <Flex>
                    <Flex flexDirection="column">
                        <Text>TYPE</Text>
                        <Flex>
                            <Image alt="ico equip type" w="15px" h="15px" src="buyitem/ico_item_type.png"></Image>
                            <Text>Equipment</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>BIOME</Text>
                        <Text>None</Text>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>TAGS</Text>
                        <Flex as="button">
                            PIRATES
                        </Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------------Attributes------------------------------------- */}
                <Flex>
                    <Image alt="attribute overview img" w="40px" h="40px" src="buyitem/img_attr_type1.png"></Image>
                    <Flex flexDirection="column">
                        <Text>Catalyst</Text>
                        <Text>Legendary</Text>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>POWER</Text>
                        <Flex>
                            <Image alt="power img" w="20px" h="20px" src="buyitem/img_def.png"></Image>
                            <Text>49</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>DEFENSE</Text>
                        <Flex>
                            <Image alt="defense img" w="20px" h="20px" src="buyitem/img_power.png"></Image>
                            <Text>31</Text>
                        </Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------------Description------------------------------------- */}
                <Flex>
                    Description
                    <Text>
                        Gloves protect from rope burn and splinters. Gold epaulettes complete the Admiral Jacket. Lover's blue scarf and an emergency dagger on each bicep...
                    </Text>
                </Flex>
                <Flex flexDirection="column">
                    <Flex>
                        <Text>NFT FORM CREATOR</Text>
                        <Text>See more {'>'}</Text>
                    </Flex>
                    {/* --------Gloves------- */}
                    <Flex>
                        <Image alt="asset img" w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Gloves</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type1.png"></Image>
                    </Flex>
                    {/* ---------Jacket--------- */}
                    <Flex>
                        <Image alt="asset img"  w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Jacket</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type2.png"></Image>
                    </Flex>
                    {/* --------------Boots-------------- */}
                    <Flex>
                        <Image alt="asset img" w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Boots</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type2.png"></Image>
                    </Flex>
                </Flex>
                {/* -----------------------------Description----------------------------- */}
                <Flex flexDirection="column">
                    <Text>Description</Text>
                    <Flex flexDirection="column">
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a creator designs an Asset, he has to distribute points amongst the chosen Attributes.</Flex>
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>A creator can change the amount of the attributes while creating an asset.</Flex>
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------buy component---------------------------- */}
                <Flex>
                    <Flex flexDirection="column">
                        <FormLabel>CURRENT PRICE</FormLabel>
                        <Flex>
                            <Image src="item/coin_logo.png" w="20px" h="20px" alt="coin logo"></Image>
                            <Text textColor="#FDB32A" fontSize="15px" fontWeight="500" ml="0.5rem">2940.00</Text>
                        </Flex>
                    </Flex>
                    <Text>FAVORITE</Text>
                    <Flex as="button">BUY NOW</Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BuyItem;