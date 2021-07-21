import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Flex,
} from '@chakra-ui/react';
import *as Icon from 'react-icons/fi';

import Checkbox from 'react-custom-checkbox';

const CustomCheckbox = ({ bg }) => {
    return (
        <Flex w="20px" h="20px" _hover={{ background: 'linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)' }} bg="rgba(255, 255, 255, 0.33)" borderRadius="4px" p="1px" mr="1rem">
            <Flex w="100%" h="100%" bg={bg ? bg : "#090f1f"} borderRadius="3px" alignItems="center" justifyContent="center">
                <Checkbox 
                    icon={<Flex w="100%" h="100%" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" p="-1px" justifyContent="center" alignItems="center"><Icon.FiCheck color="white" size={15} /></Flex>}
                    borderWidth="0px">
                </Checkbox>
            </Flex>
        </Flex>
    )
};

export default CustomCheckbox;