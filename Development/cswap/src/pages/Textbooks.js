
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
import TextbookProductCard from '../components/productCards/TextbookProductCard';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';

const Textbooks = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [textbookPosts, setTextbookPosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getTextbooks = [];

    var querySnapshot = await getDocs(collection(db, "textbooks"));
    querySnapshot.forEach((doc) => {
      getTextbooks.push({...doc.data(), key: doc.id});
    });

    setTextbookPosts(getTextbooks);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Textbooks</Heading>
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
                {textbookPosts.length > 0 ? (textbookPosts.map((post) => 
                  <TextbookProductCard textbook={post}></TextbookProductCard>)) : <h1>No Textbooks</h1>}
              </HStack>
          </Box>
          </div>
        </HStack>
    </div>
  );
};

export default Textbooks