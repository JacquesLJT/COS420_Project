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

function  Sidebar () {
  return (
    <div> 
        <Flex
            mb={0}
            p={0}
            // as="nav"
            // align="center"
            justify="space-between"
            h="100%"
            w="10px"
            bg="white"
            >
            <Stack bg="white" h="100%">
                {/* <Box p={5}> */}
                    <Text fontSize="lg" fontWeight="bold" bg="white" p={6}> Textbooks</Text>
                    <Text fontSize="lg" fontWeight="bold" bg="white" p={6}> Furniture</Text>
                    <Text fontSize="lg" fontWeight="bold" bg="white" p={6}> Electronics</Text>
                    <Text fontSize="lg" fontWeight="bold" bg="white" p={6}> Apartments</Text>
                {/* </Box> */}
                {/* <Box>
                    <Text fontSize="lg" fontWeight="bold" bg="white"> CSwap</Text>
                </Box> */}
            </Stack>
                
        </Flex>
    </div>
   )
}
 
export default Sidebar