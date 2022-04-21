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
import Navbar from '../components/Navbar';
import ElectronicProductCard from '../components/productCards/ElectronicProductCard';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';

const Electronics = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [electronicPosts, setElectronicPosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getElectronics = [];
    var querySnapshot = await getDocs(collection(db, "electronics"));
    querySnapshot.forEach((doc) => {
      getElectronics.push({...doc.data(), key: doc.id});
    });

    setElectronicPosts(getElectronics);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Electronics</Heading>
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
                {electronicPosts.length > 0 ? (electronicPosts.map((post) => 
                <ElectronicProductCard electronic={post}></ElectronicProductCard>)) : <h1>No Electronics</h1>}
              </HStack>
            </Box>

          </div>
        </HStack>
    </div>
  );
};

export default Electronics;