import { 
  Center,
  Heading, 
  HStack,
  Button,
  VStack,
  Flex,
  Box,
  Text
} from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';

import ApartmentProductCard from '../components/productCards/ApartementProductCard';
import Navbar from '../components/Navbar';

const Apartments = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [apartmentPosts, setApartmentPosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getApartments = [];
    var querySnapshot = await getDocs(collection(db, "apartments"));
    querySnapshot.forEach((doc) => {
      getApartments.push({...doc.data(), key: doc.id});
    });
    setApartmentPosts(getApartments);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Aparments</Heading>
      </Center>
      <HStack>
        <VStack p={10}>
            <Text>Filters</Text>
            <Text> </Text>
            <Button
              onClick={handleCreateListing}
              loadingText="Whispering to our servers..."
              size="lg"
              colorScheme="green"
              type="submit"
            >
              Create Listing
            </Button>
        </VStack>
          <div>
          <Box
            borderWidth="2px"
            borderColor="green.800"
            width={'100%'}
            p={5}>
              <HStack justify="center" mb={10}>
                {apartmentPosts.length > 0 ? (apartmentPosts.map((post) => 
                <ApartmentProductCard apartment={post}></ApartmentProductCard>)) : <h1>No Apartments</h1>}
              </HStack>
            </Box>
          </div>
        </HStack>
    </div>
  );
};
export default Apartments