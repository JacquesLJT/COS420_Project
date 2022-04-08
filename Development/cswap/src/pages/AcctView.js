import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Center,
    Stack,
    Heading, 
    Text, 
    Button, 
    CheckFlex, 
    Input, 
    InputLeftAddon, 
    InputGroup,
    Select,
    Image,
    Flex,
    VStack,
    HStack,
    Textarea
} from '@chakra-ui/react';


const AcctView = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    return (
      <div>
        <Center mb='10'>
          <Heading as={'h1'} size={'xl'} colorScheme="green" mt={110}>Home</Heading>
        </Center>
      </div>
    );
  };
  
  export default AcctView;