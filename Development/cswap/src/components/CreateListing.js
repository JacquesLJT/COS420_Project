import React from 'react'
import { 
    Center,
    Stack,
    Heading, 
    Text, 
    Button, 
    CheckFlex, 
    Input, 
    InputLeftAddon, 
    InputGroup,
    Select,
    Image,
    Flex,
    VStack,
    HStack
} from '@chakra-ui/react';
import { ImBooks, ImHome3, ImMobile} from 'react-icons/im';
import { GiCoffeeMug } from 'react-icons/gi';
import {BiChair} from 'react-icons/bi';
import { Routes, Route, Navigate, Link} from 'react-router-dom';
import { useNavigate } from 'react-router';

const textBookListing = () => {
    // <Flex w="100%" justify={"center"}>
                        
    //                     <Stack>
    //                         <Heading as={'h3'} size={'md'}>Item:</Heading>
    //                         <Input/>
    //                         <></>
    //                     </Stack>
    //                 </Flex>
    //                 <Flex w="100%" justify={"center"}>
    //                     <Stack>
    //                         <Heading as={'h3'} size={'md'}>Title</Heading>
    //                         <Input/>
    //                     </Stack>
    //                 </Flex>
    //                 <Flex w="100%" justify={"center"}>
    //                     <Stack>
    //                         <Heading as={'h3'} size={'md'}>Title</Heading>
    //                         <Input/>
    //                     </Stack>
    //                 </Flex>
}
function SelectProduct() {
    return (
      <VStack mt="15" spacing="5" w="100%" > 
          <Button 
              leftIcon={<ImBooks />} 
              boxShadow="lg" 
              colorScheme="green" 
              variant="outline">
              TextBooks
          </Button> 
          <Button 
              leftIcon={<ImHome3 />} 
              boxShadow="lg" 
              colorScheme="green" 
              variant="outline">
              Apartment Rentals</Button>   
          <Button 
              leftIcon={<ImMobile />}
              boxShadow="lg" 
              colorScheme="green" 
              variant="outline">
              Electronics    
          </Button>
          <Button 
              leftIcon={<BiChair />} 
              boxShadow="lg" 
              colorScheme="green" 
              variant="outline">
              Furniture
          </Button>
          <Button 
              leftIcon={<GiCoffeeMug />} 
              boxShadow="lg" 
              colorScheme="green" 
              variant="outline">
              Appliances
          </Button>   
      </VStack>
    )
}
const LoadTextBookForm = async e => {
    const navigate = Navigate();
    navigate("/textbook");
};

function TextBookForm() {
    return (
        <>yoyo</>
    )
}
function ApartmentRentalsForm() {
    return (
        <>yoyo</>
    )
}
function ElectronicsForm() {
    return (
        <>yoyo</>
    )
}

function CreateListing() {
  return (
    <Center h="100vh" bg="#013220">
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
                <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Create Listing</Heading>
                </Center>
            <HStack>
                <Button colorScheme={"red"}>Cancel</Button>
                <Routes>
                    <Route path="/" element={<SelectProduct />} />
                    <Route path="/textbook" element={<TextBookForm />} />
                    <Route path="/apartmentRentals" element={<ApartmentRentalsForm />} />
                    <Route path="/electronics" element={<ElectronicsForm />} />
                </Routes>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    </Center>
  )
}

export default CreateListing;