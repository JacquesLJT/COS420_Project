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

import ApplianceProductCard from '../components/productCards/ApplianceProductCard';

const Appliances = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [appliancePosts, setAppliancePosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getAppliances = [];
    var querySnapshot = await getDocs(collection(db, "appliances"));
    querySnapshot.forEach((doc) => {
      getAppliances.push({...doc.data(), key: doc.id});
    });

    setAppliancePosts(getAppliances);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Appliances</Heading>
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
                {appliancePosts.length > 0 ? (appliancePosts.map((post) => 
                <ApplianceProductCard electronic={post}></ApplianceProductCard>)) : <h1>No Appliances</h1>}
              </HStack>
            </Box>
          </div>
        </HStack>
    </div>
  );
};

export default Appliances;