import { 
    Button,
    Flex,
    Image,
    Box
  } from '@chakra-ui/react';
import React from 'react'
import LogoutBtn from './LogoutBtn';
import { Link } from 'react-router-dom';
import { MdAccountCircle} from 'react-icons/md';

function  navbar () {
  return (
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
            zIndex={100}
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
                        <Link to="/home"><Button colorScheme="green">Home</Button></Link>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/textbooks"><Button colorScheme="green">Textbooks</Button></Link>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/apartments"><Button colorScheme="green">Apartment Rentals</Button></Link>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/electronics"><Button colorScheme="green">Electronics</Button></Link>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/furniture"><Button colorScheme="green">Furniture</Button></Link>
                    </Box>
                    <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/appliances"><Button colorScheme="green">Appliances</Button></Link>
                    </Box>
                </Flex>
                <Box align="right" p={5}>
                    <Button colorScheme="green"><Link to="/Chat">Chat</Link></Button>
                </Box>         
                <Box
                        ml={5}
                        mr={5}
                    >
                        <Link to="/AcctSettings">
                            <Button 
                            boxShadow="lg" 
                            colorScheme="green"
                            variant={"outline"}
                            borderColor="blackAlpha.300"><MdAccountCircle size={"20px"}/>
                            </Button>
                        </Link>
                    </Box>
                <Box align="right">
                    <LogoutBtn/>
                </Box> 
        </Flex>
   )
}
 
export default navbar