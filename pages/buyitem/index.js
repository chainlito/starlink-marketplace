import React, {useState} from 'react';
import {
    Flex,
    Text,
    Image,
    FormLabel,
} from '@chakra-ui/react';
import Socialbutton from '../../components/SocialButton';
import BuyModal from '../../components/BuyModal';
import { useWallet } from 'use-wallet';
import BigNumber from 'bignumber.js';
import { ethers } from "ethers";
import { approveToken, checkAllowance } from '../../contracts/starlink';

const BuyItem = () => {

    const wallet = useWallet();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = async() => {
        /*const owner_addr = "0x5a168798df2b9d84e28958702156b036927a9e29";
        const walletAddres = wallet.account;

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer = await provider.getSigner();

        const needApprove = await checkAllowance(owner_addr, walletAddres, signer);
        const amount = new BigNumber(needApprove);
        if (amount.eq("0")) {
            const approveRes = await approveToken(walletAddres, 0, signer);
            if (approveRes) setIsOpen(true);
        } else {*/
            setIsOpen(true);
        //}
    };

    const cloesModal = () => {
        setIsOpen(false);
    };

    return (
        <Flex w="100%" h="100%" ml="200px">
            <Flex flexDirection="column" h="100%" bg="#141B34" borderRadius="8px" 
                mt="50px" mr="-25px" p="15px">
                <Flex w="35px" h="35px"><Socialbutton network="twitter" /></Flex>
                <Flex w="35px" h="35px" mt="10px"><Socialbutton network="facebook" /></Flex>
            </Flex>
            <Flex w="600px" h="550px" padding="4px" borderRadius="8px" bg="linear-gradient(180deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" m="50px">
                <Flex w="100%" h="100%" bg="#131A32" borderRadius="6px" justifyContent="center" alignItems="center">
                    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
                        <Flex w="100%" h="100%">
                                <video autoPlay loop muted
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '5px',
                                        opacity: '0.5',
                                    }}
                                >
                                    <source src="/defaultItem.mp4" type="video/mp4" />
                                </video>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection="column" borderLeft="solid 2px" borderColor="#131A32">
                <Flex flexDirection="column" m="50px" mb="10px">
                    <Text fontSize="40px" textColor="#fff" fontWeight="400">ADMIRAL GLOVES</Text>
                    <Flex alignItems="center">
                        <Text fontSize="14px" fontWeight="400" textColor="#1365F1">Token ID: 5334...4096</Text>
                        <Image alt="copy addr" w="20px" h="20px" src="/buyitem/ico_addr_copy.png" ml="1rem" />
                    </Flex>
                    <Flex mt="1rem" alignItems="center">
                        <Image alt="creator avatar" w="50px" h="50px" src="/buyitem/img_profile.png"></Image>
                        <Flex flexDirection="column" ml="1rem">
                            <FormLabel fontSize="10px" fontWeight="300" textColor="rgba(255, 255, 255, 0.4)">BY CREATOR</FormLabel>
                            <FormLabel fontSize="14px" fontWeight="300" textColor="#fff">@KamiSawZe</FormLabel>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Flex alignItems="center">
                            <Image alt="ico copy" w="15px" h="15px" src="/buyitem/ico_copy.png"></Image>
                            <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">11 Minted</Text>
                        </Flex>
                        <Flex w="1px" h="30px" bg="#1C2646" m="0 1.5rem 0 1.5rem" alignSelf="center"></Flex>
                        <Flex alignItems="center">
                            <Image alt="ico mark" w="15px" h="15px" src="/buyitem/ico_note.png"></Image>
                            <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">8 of 10 For sale</Text>
                        </Flex>
                        <Flex w="1px" h="30px" bg="#1C2646" m="0 1.5rem 0 1.5rem" alignSelf="center"></Flex>
                        <Flex alignItems="center">
                            <Image alt="ico profile" w="20px" h="15px" src="/buyitem/ico_network.png"></Image>
                            <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">3 Owners</Text>
                        </Flex>
                    </Flex>
                    {/* ---------------------------------------------------------------------------------- */}
                    <Flex bg="#131A32" w="100%" borderRadius="4px" p="1rem" mt="1.5rem">
                        <Flex flexDirection="column" mr="4rem">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">TYPE</Flex>
                            <Flex fontWeight="300" h="100%" textColor="#fff" fontSize="14px" mt="1rem" alignItems="center">
                                <Image alt="ico equip type" w="13px" h="13px" src="/buyitem/ico_item_type.png" mr="0.5rem"></Image>
                                Equipment
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" mr="4rem">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">BIOME</Flex>
                            <Flex fontWeight="300" h="100%" textColor="#fff" fontSize="14px" mt="1rem" alignItems="center">None</Flex>
                        </Flex>
                        <Flex flexDirection="column">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">TAGS</Flex>
                            <Flex h="30px" borderRadius="15px" mt="1rem" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" p="2px" alignItems="center">
                                <Flex as="button" cursor="pointer" border="none" w="100%" h="100%" borderRadius="15px" bg="#131A32" textColor="#fff" fontSize="10px" fontWeight="300" alignItems="center" p="0 1rem 0 1rem">
                                    PIRATES
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* ------------------------------------Attributes------------------------------------- */}
                    <Flex textColor="#fff" fontSize="20px" mt="1.5rem">Attributes</Flex>
                    <Flex alignItems="center" mt="0.5rem" p="1rem" w="100%" bg="#131A32" borderRadius="4px">
                        <Image alt="attribute overview img" w="40px" h="40px" src="/buyitem/img_attr_type1.png"></Image>
                        <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="1rem">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="10px">Catalyst</Flex>
                            <Flex fontWeight="300" textColor="#fff" fontSize="14px">Legendary</Flex>
                        </Flex>
                        <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="4rem">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">POWER</Flex>
                            <Flex fontWeight="300" textColor="#fff" fontSize="14px">
                                <Image alt="power img" w="20px" h="20px" src="/buyitem/img_def.png" mr="0.5rem"></Image>
                                49
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="4rem">
                            <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">DEFENSE</Flex>
                            <Flex fontWeight="300" textColor="#fff" fontSize="14px">
                                <Image alt="defense img" w="20px" h="20px" src="/buyitem/img_power.png" mr="0.5rem"></Image>
                                31
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* ------------------------------------Description------------------------------------- */}
                    <Flex flexDirection="column" textColor="#fff" fontSize="20px" mt="1.5rem">
                        Description
                        <Text fontWeight="300" textColor="#fff" fontSize="14px" mt="1rem">
                            Gloves protect from rope burn and splinters. Gold epaulettes complete the Admiral Jacket. Lover&apos;s blue scarf and an emergency dagger on each bicep...
                        </Text>
                    </Flex>
                    {/* <Flex flexDirection="column" bg="#131A32" borderRadius="4px" mt="1.5rem" padding="1.5rem">
                        <Flex alignItems="center" justifyContent="space-between">
                            <Text fontWeight="300" textColor="rgba(255, 255, 255, 0.4)" fontSize="12px">NFT FORM CREATOR</Text>
                            <Text fontWeight="300" textColor="#fff" fontSize="16px">See more {'>'}</Text>
                        </Flex>
                        <Flex as="button" alignItems="center" bg="#131A32" borderRadius="6px" border="solid 2px" borderColor="#1C2441" p="1rem" mb="1rem" cursor="pointer" _focus={{ borderColor: '#314DFF' }} _hover={{ borderColor: '#314DFF' }} justifyContent="space-between">
                            <Flex h="100%">
                                <Image alt="asset img" w="60px" h="70px" src="/buyitem/img_item1.png"></Image>
                                <Flex flexDirection="column"  fontWeight="300" textColor="#fff" textAlign="left" fontSize="16px" h="100%" justifyContent="space-between" ml="1.5rem">
                                    Admiral Gloves
                                    <Flex textColor="#314DFF">Legendary</Flex>
                                    11
                                </Flex>
                            </Flex>
                            <Image alt="overview img" w="50px" h="50px" src="/buyitem/img_attr_type1.png"></Image>
                        </Flex>
                        <Flex as="button" alignItems="center" bg="#131A32" borderRadius="6px" border="solid 2px" borderColor="#1C2441" p="1rem" mb="1rem" cursor="pointer" _focus={{ borderColor: '#314DFF' }} _hover={{ borderColor: '#314DFF' }} justifyContent="space-between">
                            <Flex h="100%">
                                <Image alt="asset img"  w="60px" h="70px" src="/buyitem/img_item2.png"></Image>
                                <Flex flexDirection="column" fontWeight="300" textColor="#fff" textAlign="left" fontSize="16px" h="100%" justifyContent="space-between" ml="1.5rem">
                                    Admiral Jacket
                                    <Flex color="transparent" bg="linear-gradient(#FDBF25, #FE9200)" style={{ "-webkit-background-clip": "text" }}>Legendary</Flex>
                                    11
                                </Flex>
                            </Flex>
                            <Image alt="overview img" w="40px" h="40px" src="/buyitem/img_attr_type2.png"></Image>
                        </Flex>
                        <Flex as="button" alignItems="center" bg="#131A32" borderRadius="6px" border="solid 2px" borderColor="#1C2441" p="1rem" mb="1rem" cursor="pointer" _focus={{ borderColor: '#314DFF' }} _hover={{ borderColor: '#314DFF' }} justifyContent="space-between">
                            <Flex h="100%">
                                <Image alt="asset img" w="60px" h="70px" src="/buyitem/img_item3.png"></Image>
                                <Flex flexDirection="column" fontWeight="300" textColor="#fff" textAlign="left" fontSize="16px" h="100%" justifyContent="space-between" ml="1.5rem">
                                    Admiral Boots
                                    <Flex color="transparent" bg="linear-gradient(#FDBF25, #FE9200)" style={{ "-webkit-background-clip": "text" }}>Legendary</Flex>
                                    11
                                </Flex>
                            </Flex>
                            <Image alt="overview img" w="40px" h="40px" src="/buyitem/img_attr_type2.png"></Image>
                        </Flex>
                    </Flex> */}
                    {/* -----------------------------Description----------------------------- */}
                    <Flex flexDirection="column" mt="1.5rem">
                        <Text fontWeight="300" textColor="#fff" fontSize="24px" mb="1rem">Description</Text>
                        <Flex flexDirection="column" fontWeight="300" textColor="#fff" fontSize="14px">
                            <Flex mb="1rem"><Image alt="list icon" src="/buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a creator designs an Asset, he has to distribute points amongst the chosen Attributes.</Flex>
                            <Flex mb="1rem"><Image alt="list icon" src="/buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>A creator can change the amount of the attributes while creating an asset.</Flex>
                            <Flex mb="1rem"><Image alt="list icon" src="/buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</Flex>
                        </Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------buy component---------------------------- */}
                <Flex w="100%" h="100px" bg="#131A32">
                    <Flex m="20px 50px" w="100%" justifyContent="space-between" alignItems="center">
                        <Flex flexDirection="column" alignItems="center">
                            <Flex color="rgba(255, 255, 255, 0.4)" fontWeight="300" fontSize="10px">CURRENT PRICE</Flex>
                            <Flex alignItems="center">
                                <Image src="item/coin_logo.png" w="20px" h="20px" alt="coin logo"></Image>
                                <Text textColor="#FDB32A" fontSize="15px" fontWeight="500" ml="0.5rem">2940.00</Text>
                            </Flex>
                        </Flex>
                        <Text color="#fff" fontSize="15px" fontWeight="500">FAVORITE</Text>
                        <Flex as="button" onClick={openModal} w="30%" h="60px" justifyContent="center" alignItems="center" color="#fff" fontSize="15px" fontWeight="500" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }}>PLACE BID</Flex>
                    </Flex>
                </Flex>
            </Flex>
            <BuyModal isOpen={isOpen} onClose={cloesModal}/>
        </Flex>
    );
}

export default BuyItem;