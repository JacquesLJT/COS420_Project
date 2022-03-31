import { 
  Center,
  Heading, 
  HStack,
  Button,
  VStack,
  Flex,
  Box
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
// import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

//import Sidebar from './Sidebar';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  return (
    <div>
      <Navbar/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Home</Heading>
      </Center>
      <HStack  >
        {/* <Button
            onClick={handleGoogleSignIn}
            loadingText="Whispering to our servers..."
            size="lg"
            colorScheme="green"
            type="submit"
        >
            Sign in
        </Button> */}
        
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
          <HStack justify="center" mb={10}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </HStack>
          <HStack justify="center" mb={10}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </HStack>
          <HStack justify="center" mb={10}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </HStack>
          <HStack justify="center" mb={10}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </HStack>
          </div>
        </HStack>
    </div>
  );
};

export default Home;