import React from 'react';
import {
  Flex,
} from '@chakra-ui/react';
import ShopCategory from '../../components/ShopCatetory'
import ItemList from '../../components/ItemList';

export default function MarketPlace() {
  return (
    <Flex w="100%" h="100%" mt="1.5rem" mr="3rem">
      <ShopCategory />
      <ItemList />
    </Flex>
  )
}