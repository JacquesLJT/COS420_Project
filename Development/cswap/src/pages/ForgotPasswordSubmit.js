import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Flex,
    Image,
    Box,
    Text,
    Stack,
    Center
} from '@chakra-ui/react'

function ForgotPasswordSubmit() {

    return (
        <>
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
                <Box align="left">
                    <Image
                        width='100px'
                        src='CSwapLogo.png'
                        alt='CSwap'
                        onClick={() => window.location.reload()}
                        cursor="pointer"
                    />
                </Box>
                <Box  align="right">
                    <Button variant="outline" colorScheme="green" href="/">Login</Button>
                </Box>
            </Flex>

            <Stack spacing={0} align="center">
                <Text fontSize="4xl" fontWeight="bold" color="green.800" mt={100}>
                    A password reset email has been sent to the email provided.
                </Text>
                <br />
                <Text fontSize="4xl" fontWeight="bold" color="green.800" mt={100}>
                    Thank you for using CSwap!
                </Text>
                <br />
                <Text fontSize="2xl" fontWeight="bold" color="green.800" mt={100}>
                    - CSwap Marketplace Team!
                </Text>
            </Stack>

            <Center>    
                <Button colorScheme="green" variant="link">
                    <Link to="/">Back to Login</Link>
                </Button>
            </Center>

        </>
  )
}

export default ForgotPasswordSubmit