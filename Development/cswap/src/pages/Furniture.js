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
import Navbar from '../components/Navbar';

import FurnitureProductCard from '../components/productCards/FurnitureProductCard';

const Furniture = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [furniturePosts, setFurniturePosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getFurniture = [];
    var querySnapshot = await getDocs(collection(db, "furniture"));
    querySnapshot.forEach((doc) => {
      getFurniture.push({...doc.data(), key: doc.id});
    });

    setFurniturePosts(getFurniture);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Furniture</Heading>
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
                {furniturePosts.length > 0 ? (furniturePosts.map((post) => 
                <FurnitureProductCard electronic={post}></FurnitureProductCard>)) : <h1>No Furniture</h1>}
              </HStack>
            </Box>
          </div>
        </HStack>
    </div>
  );
};

export default Furniture;