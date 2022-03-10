import { 
  Center,
  Heading, 
  HStack
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
// import Sidebar from './Sidebar';
import Header from './Header';
import './Home.css';
import ProductCard from './ProductCard';
//import Sidebar from './Sidebar';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Header/>
      <Center mb='10'>
        <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Home</Heading>
      </Center>
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
  );
};

export default Home;
