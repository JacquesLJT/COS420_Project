import { Center, Text, Box} from '@chakra-ui/react'
import React from 'react'

function ProductCard() {
  return (
    <Box w={350} h={300} borderWidth="2px" borderRadius="lg" borderColor="green.800">
        <Center>
            <Text> Yo </Text>
        </Center>
    </Box>
  )
}

export default ProductCard