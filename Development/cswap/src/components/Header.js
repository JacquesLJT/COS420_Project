import { 
    Center,
    Stack,
    Heading, 
    Text, 
    Button, 
    Checkbox, 
    Input, 
    Flex, 
    HStack,
    InputGroup,
    Alert,
    Image,
    Box
  } from '@chakra-ui/react';
import React from 'react'
import LogoutBtn from './LogoutBtn';
import Sidebar from './Sidebar';

function  Header () {
  return (
    <div> 
        <Flex
            mb={0}
            p={6}
            as="nav"
            align="center"
            justify="space-between"
            w="100%"
            bg="white"
            >
                <Box>
                    <Text fontSize="lg" fontWeight="bold" bg="white"> CSwap</Text>
                </Box>
                <Box align="right">
                    <LogoutBtn></LogoutBtn>
                </Box> 
        </Flex>
    </div>
   )
}
 
export default Header