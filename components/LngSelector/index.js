import React, { useEffect, useState } from 'react';
import {
    Flex,
    Image,
    Input,
    Text,
} from '@chakra-ui/react';

const LanguageSelector = () => {

    const [icon, setIcon] = useState('header/ico_lng.png');
    const [arrow, setArrow] = useState('/arrow_down.png');

    const onFocus = () => {
        setIcon('header/ico_lng_selected.png');
        setArrow('/arrow_up.png');
    };

    const onBlur = () => {
        setIcon('header/ico_lng.png');
        setArrow('/arrow_down.png');
    }

    return (
        <Flex as="button" border="none" bg="transparent" w="100%" h="100%" onFocus={onFocus} onBlur={onBlur} justifyContent="center" alignItems="center">
            <Image alt="ico lng" w="20px" h="20px" src={icon} mr="0.5rem" />
            <Flex _focus={{ outline: 'none'}} border="none" h="100%" bg="transparent" textColor="#fff" mr="1rem">
                <Text fontSize="13px" fontWeight="400">EN</Text>
            </Flex>
            <Image alt="arrow down" w="12px" h="8px" src={arrow} />
        </Flex>
    )
};

export default LanguageSelector;