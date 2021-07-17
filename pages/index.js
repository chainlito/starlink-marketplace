import React from 'react';
import {
  Flex,
} from '@chakra-ui/react';
import ShopCategory from '../components/ShopCatetory';
import ItemList from '../components/ItemList';

export default function Home() {
  return (
    <Flex w="100%" h="100%">
      <ShopCategory />
      <ItemList />
    </Flex>
  )
}
