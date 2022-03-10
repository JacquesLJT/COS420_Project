import { 
    Button,
    Flex,
    Image,
    Box
  } from '@chakra-ui/react';
import React from 'react'
import LogoutBtn from './LogoutBtn';

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
            borderBottomWidth="2px"
            borderBottomColor="green.800"
            height={100}
            position="fixed"
            >
                <Box 
                    align="left" 
                >
                    <Image
                        width='100px'
                        src='CSwapLogo.png'
                        alt='CSwap' 
                        onClick={() => window.location.reload()}
                        cursor="pointer"
                    />
                </Box>
                <Flex
                    mb={0}
                    p={6}
                    as="nav"
                    align="center"
                    justify="center"
                    w="100%"
                    bg="white"
                >
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button variant="ghost" colorScheme="green">Home</Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button variant="outline" colorScheme="green">Textbooks</Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button>Apartment Rentals</Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button>Electronics</Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button>Furniture</Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button>Appliances</Button>
                    </Box>
                </Flex>
                <Box align="right">
                    <LogoutBtn/>
                </Box> 
        </Flex>
    </div>
   )
}
 
export default Header