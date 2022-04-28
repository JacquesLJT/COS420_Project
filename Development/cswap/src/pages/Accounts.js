import {
    Center,
    Heading,
    HStack,
    Button,
    VStack,
    Flex,
    Box,
    Text,
    Image
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { useUserAuth } from '../context/UserAuthContext';
  import { getAuth } from "firebase/auth";
  import Navbar from '../components/Navbar';
  import { auth, db } from "../firebase";
  import { collection, getDocs } from 'firebase/firestore';
  
  import TextbookProductCard from './productCards/TextbookProductCard';
  import ApartmentProductCard from './productCards/ApartementProductCard';
  import ElectronicProductCard from './productCards/ElectronicProductCard';
  import FurnitureProductCard from './productCards/FurnitureProductCard';
  import ApplianceProductCard from './productCards/ApplianceProductCard';



const Account = () => {

    const user = auth.currentUser;
    const displayName = user.displayName;
    const photo = user.photoURL;
    const email = user.email;




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
            <Center padding='10'>
                <Navbar/>
            </Center>

                <HStack mt='02%' spacing='30%'>
                    <Image
                        ml='6%'
                        width='100px'
                        src={photo}
                        alt='NoPicture' 
                        onClick={() => window.location.reload()}
                        cursor="pointer"
                    />
                    <VStack>
                    <Text >
                        DisplayName: {displayName}
                    </Text>
                    <Text>
                        ContactInfo: {email}
                    </Text>
                    </VStack>
                </HStack>

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

        </div>
    );
};
export default Account