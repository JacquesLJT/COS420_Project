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

import TextbookProductCard from './productCards/TextbookProductCard';
import ApartmentProductCard from './productCards/ApartementProductCard';
import ElectronicProductCard from './productCards/ElectronicProductCard';
import FurnitureProductCard from './productCards/FurnitureProductCard';
import ApplianceProductCard from './productCards/ApplianceProductCard';

//import Sidebar from './Sidebar';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleCreateListing = async e => {
    navigate('/createListing');
  };
  const [apartmentPosts, setApartmentPosts] = useState([]);
  const [textbookPosts, setTextbookPosts] = useState([]);
  const [electronicPosts, setElectronicPosts] = useState([]);
  const [appliancePosts, setAppliancePosts] = useState([]);
  const [furniturePosts, setFurniturePosts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const getApartments = [];
    const getTextbooks = [];
    const getElectronics = [];
    const getFurniture = [];
    const getAppliances = [];

    var querySnapshot = await getDocs(collection(db, "textbooks"));
    querySnapshot.forEach((doc) => {
      getTextbooks.push({...doc.data(), key: doc.id});
    });

    var querySnapshot = await getDocs(collection(db, "apartments"));
    querySnapshot.forEach((doc) => {
      getApartments.push({...doc.data(), key: doc.id});
    });

    var querySnapshot = await getDocs(collection(db, "electronics"));
    querySnapshot.forEach((doc) => {
      getElectronics.push({...doc.data(), key: doc.id});
    });

    var querySnapshot = await getDocs(collection(db, "furniture"));
    querySnapshot.forEach((doc) => {
      getFurniture.push({...doc.data(), key: doc.id});
    });

    var querySnapshot = await getDocs(collection(db, "appliances"));
    querySnapshot.forEach((doc) => {
      getAppliances.push({...doc.data(), key: doc.id});
    });

    setTextbookPosts(getTextbooks);
    setApartmentPosts(getApartments);
    setElectronicPosts(getElectronics);
    setFurniturePosts(getFurniture);
    setAppliancePosts(getAppliances);
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
            
          <Heading as={'h2'} 
            size={'lg'} 
            colorScheme="green" 
            m={2} 
            >
              Electronics
          </Heading>
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

          <Heading as={'h2'} 
            size={'lg'} 
            colorScheme="green" 
            m={2} 
            >
              Furniture
          </Heading>
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

          <Heading as={'h2'} 
            size={'lg'} 
            colorScheme="green" 
            m={2} 
            >
              Appliances
          </Heading>
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