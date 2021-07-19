import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import {
    Flex
} from '@chakra-ui/react';

const CustomCheckbox = withStyles({
    root: {
        // background: 'linear-gradient(#FDBF25, #B417EB, #0D57FF, #2D9CB4)',
        color: 'rgba(255, 255, 255, 0.5)',
        '&$checked': {
            color: 'white',
        },
    },
    checked: {},
})((props) => <Flex justifyContent="center" alignItems="center" w="22px" h="22px" borderRadius="4px" bg="transparent" mr="1rem"><Checkbox color="default" {...props} /></Flex>);

export default CustomCheckbox;