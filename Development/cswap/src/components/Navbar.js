import { 
    Button,
    Flex,
    Image,
    Box
  } from '@chakra-ui/react';
import React from 'react'
import LogoutBtn from './LogoutBtn';
import { Link } from 'react-router-dom';

function  navbar () {
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
                        <Button colorScheme="green"><Link to="/home">Home</Link></Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button colorScheme="green"><Link to="/Textbooks">Textbooks</Link></Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button colorScheme="green"><Link to="/Rentals">Apartment Rentals</Link></Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button colorScheme="green"><Link to="/Electronics">Electronics</Link></Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button colorScheme="green"><Link to="/Furniture">Furniture</Link></Button>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Button colorScheme="green"><Link to="/Appliances">Appliances</Link></Button>
                    </Box>
                </Flex>
                <Box align="right" p={5}>
                    <Button colorScheme="green"><Link to="/Chat">Chat</Link></Button>
                </Box>
                <Box align="right">                    
                    <LogoutBtn/>
                </Box> 
        </Flex>
    </div>
   )
}
 
export default navbar