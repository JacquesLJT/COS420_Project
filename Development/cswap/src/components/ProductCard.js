import { Center, Flex, Text, Box} from '@chakra-ui/react'
import React from 'react'
import { Stack } from 'react-bootstrap'

function ProductCard() {
  return (
    <Box w={320} h={240} bg="green.900" m={5}>
        <Center bg="green.900">
            <Text bg="green.900"> Yo </Text>
        </Center>
    </Box>
  )
}

export default ProductCard