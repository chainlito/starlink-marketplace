import React, { useEffect, useState } from 'react';
import {
    Flex,
    Image,
    Input,
    Text,
} from '@chakra-ui/react';

const SortBy = () => {

    const [arrow, setArrow] = useState('/arrow_down.png');

    const onFocus = () => {
        setArrow('/arrow_up.png');
    };

    const onBlur = () => {
        setArrow('/arrow_down.png');
    }

    return (
        <Flex w="100%" h="100%" bg="transparent" _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} borderRadius="6px" alignItems="center" p="2px">
            <Flex as="button" onFocus={onFocus} onBlur={onBlur} border="none" w="100%" h="100%" borderRadius="5px" justifyContent="center" alignItems="center" bg="#1e253f" p="0.5rem">
                <Text fontSize="13px" textColor="#fff" fontWeight="400" mr="1rem" >Newest</Text>
                <Image alt="arrow down" w="12px" h="8px" src={arrow} />
            </Flex>
        </Flex>
    )
};

export default SortBy;