import { 
  Center,
  Heading, 
  HStack,
  Button,
  VStack,
  Flex,
  Box
} from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
// import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ApartmentProductCard from './productCards/ApartementProductCard';
import TextbookProductCard from './productCards/TextbookProductCard';

//import Sidebar from './Sidebar';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [apartmentPosts, setApartmentPosts] = useState([]);
  const [textbookPosts, setTextbookPosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getApartments = [];
    const getTextbooks = [];

    var querySnapshot = await getDocs(collection(db, "textbooks"));
    querySnapshot.forEach((doc) => {
      getTextbooks.push({...doc.data(), key: doc.id});
      // <ApartmentProductCard apartment={doc.data()}></ApartmentProductCard>
    });

    var querySnapshot = await getDocs(collection(db, "apartmentrentals"));
    querySnapshot.forEach((doc) => {
      getApartments.push({...doc.data(), key: doc.id});
      // <ApartmentProductCard apartment={doc.data()}></ApartmentProductCard>
    });

    setTextbookPosts(getTextbooks);
    setApartmentPosts(getApartments);
  }
  
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Home</Heading>
      </Center>
      <HStack>
        <VStack mb={60} p={10} justifyItems="center">
            <Button>Filter</Button>
            <Button>Apartment Rentals</Button>
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
          <Heading as={'h2'} 
            size={'lg'} 
            colorScheme="green" 
            m={2} 
            >
              Textbooks
          </Heading>
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
          <Heading as={'h2'} 
            size={'lg'} 
            colorScheme="green" 
            m={2} 
            >
              Apartments
          </Heading>
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
          <HStack justify="center" mb={10}>
            {/* <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard> */}
          </HStack>
          <HStack justify="center" mb={10}>
            {/* <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard> */}
          </HStack>
          </div>
        </HStack>
    </div>
  );
};

export default Home;