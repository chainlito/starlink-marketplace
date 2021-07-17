import React from 'react';
import {
    Flex,
    Text,
    Image,
    FormLabel,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';

const BuyItem = () => {
    return (
        <Flex w="100%" h="100%">
            <Flex flexDirection="column">
                <Image alt="ico-twitter"></Image>
                <Image alt="ico-facebook"></Image>
            </Flex>
            <Image alt="asset image"></Image>
            <Flex flexDirection="column">
                <FormLabel>ADMIRAL GLOVES</FormLabel>
                <FormLabel>Token ID: 5334...4096</FormLabel>
                <Flex>
                    <Image alt="creator avatar"></Image>
                    <Flex flexDirection="column">
                        <FormLabel>BY CREATOR</FormLabel>
                        <FormLabel>@KamiSawZe</FormLabel>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex>
                        <Image alt="ico copy"></Image>
                        <Text>11 Minted</Text>
                    </Flex>
                    <Flex>
                        <Image alt="ico mark"></Image>
                        <Text>8 of 10 For sale</Text>
                    </Flex>
                    <Flex>
                        <Image alt="ico profile"></Image>
                        <Text>3 Owners</Text>
                    </Flex>
                </Flex>
                {/* ---------------------------------------------------------------------------------- */}
                <Flex>
                    <Flex flexDirection="column">
                        <Text>TYPE</Text>
                        <Flex>
                            <Image alt="ico equip type"></Image>
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
                    <Image alt="attribute overview img"></Image>
                    <Flex flexDirection="column">
                        <Text>Catalyst</Text>
                        <Text>Legendary</Text>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>POWER</Text>
                        <Flex>
                            <Image alt="power img"></Image>
                            <Text>49</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column">
                        <Text>DEFENSE</Text>
                        <Flex>
                            <Image alt="defense img"></Image>
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
                        <Image alt="asset img"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Gloves</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img"></Image>
                    </Flex>
                    {/* ---------Jacket--------- */}
                    <Flex>
                        <Image alt="asset img"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Jacket</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img"></Image>
                    </Flex>
                    {/* --------------Boots-------------- */}
                    <Flex>
                        <Image alt="asset img"></Image>
                        <Flex flexDirection="column">
                            <Text>Admiral Boots</Text>
                            <Text>Legendary</Text>
                            <Text>11</Text>
                        </Flex>
                        <Image alt="overview img"></Image>
                    </Flex>
                </Flex>
                {/* -----------------------------Description----------------------------- */}
                <Flex flexDirection="column">
                    <Text>Description</Text>
                    <UnorderedList>
                        <ListItem>When a creator designs an Asset, he has to distribute points amongst the chosen Attributes.</ListItem>
                        <ListItem>A creator can change the amount of the attributes while creating an asset.</ListItem>
                        <ListItem>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</ListItem>
                    </UnorderedList>
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