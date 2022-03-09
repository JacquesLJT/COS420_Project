import { 
  Center,
  Stack,
  Heading, 
  Text, 
  Button, 
  Checkbox, 
  Input, 
  InputLeftAddon, 
  InputGroup,
  Alert,
  Image,
  HStack
} from '@chakra-ui/react';
import React from 'react';
import { Formik, Form } from 'formik';
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
// import Sidebar from './Sidebar';
import Header from './Header';
import './Home.css';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';

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
      <HStack>
        <Sidebar></Sidebar>
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
