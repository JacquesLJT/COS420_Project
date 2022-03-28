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
import { Switch, Routes, Route, Navigate, Link,} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

const createTextBookListing = async () =>{
    // set(ref(db, 'users/'+"4943"), {
    //     username: "hello"
    // });
    // const db = getFirestore();
    const message = doc(db, 'Textbooks/anthony');
    const docData = {
        answer: 'Anthony',
        price: 3.99,
    };
    console.log("hello");
    addDoc(collection(db, "Textbooks"), {
        answer: "hello"
    });
}

function SelectProduct() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
            <Center mb='10'>
                        <Heading as={'h1'} size={'xl'} colorScheme="green">Create Listing</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"red"}><Link to="/home">Cancel</Link></Button>
                    <VStack mt="15" spacing="5" w="100%" > 
                    <Button 
                        leftIcon={<ImBooks />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline" 
                        onClick={createTextBookListing}> 
                        <Link to="textbook/">Texbooks</Link>
                    </Button> 
                    <Button 
                        leftIcon={<ImHome3 />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        <Link to="apartmentRentals/">Apartment Rentals</Link>
                    </Button>   
                    <Button 
                        leftIcon={<ImMobile />}
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                    <Link to="electronics/">Electronics</Link>   
                    </Button>
                    <Button 
                        leftIcon={<BiChair />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        <Link to="electronics/">Furniture</Link>
                    </Button>
                    <Button 
                        leftIcon={<GiCoffeeMug />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        <Link to="appliances/">Appliances</Link>
                    </Button>   
                </VStack>
                {/* <Button colorScheme={"green"}>Next</Button> */}
            </HStack>
        </Stack>
    )
}
const LoadTextBookForm = async () => {
    const navigate = useNavigate();
    navigate("/textbook");
};

function TextBookForm() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Textbook</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"green"}>
                    <Link to="/createListing">Back</Link> 
                </Button>
                <VStack spacing={5} p={10}>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                </VStack>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    )
}
function ApartmentRentalsForm() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Apartment</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"green"}>
                    <Link to="/createListing">Back</Link> 
                </Button>
                <VStack spacing={5} p={10}>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                </VStack>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    )
}
function ElectronicsForm() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Electronic</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"green"}>
                    <Link to="/createListing">Back</Link> 
                </Button>
                <VStack spacing={5} p={10}>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                </VStack>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    )
}
function FurnitureForm() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Furniture</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"green"}>
                    <Link to="/createListing">Back</Link> 
                </Button>
                <VStack spacing={5} p={10}>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                </VStack>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    )
}
function AppliancesForm() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Appliance</Heading>
            </Center>
            <HStack>
                <Button colorScheme={"green"}>
                    <Link to="/createListing">Back</Link> 
                </Button>
                <VStack spacing={5} p={10}>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                    <Input borderColor="green" border ="2px"></Input>
                </VStack>
                <Button colorScheme={"green"}>Next</Button>
            </HStack>
        </Stack>
    )
}

function CreateListing() {
  return (
    <Center h="100vh" bg="#013220">
        <Routes>
            <Route path="/" element={<SelectProduct />} />
            <Route path="/textbook" element={<TextBookForm />} />
            <Route path="/apartmentRentals" element={<ApartmentRentalsForm />} />
            <Route path="/electronics" element={<ElectronicsForm />} />
            <Route path="/furniture" element={<FurnitureForm />} />
            <Route path="/appliances" element={<AppliancesForm />} />
        </Routes>
    </Center>
  )
}

export default CreateListing;