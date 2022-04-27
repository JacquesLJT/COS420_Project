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
  import { Link, useNavigate } from 'react-router-dom';
  import { useUserAuth } from '../context/UserAuthContext';
  import { db } from '../firebase';
  import { getAuth } from "firebase/auth";
  import Navbar from '../components/Navbar';
  
// NEED TO BE ABLE TO PASS UID INTO ACCOUNT TO MAKE THE PAGE WORK CORRECTLY.
const Account = (uid) => {
    const user = getAuth().getUser(uid);
    const displayName = user.displayName;

    return (
        <div>
            <Center mt='10'>
                <Navbar/>
            </Center>

            <Center>
                
            </Center>

        </div>
    );
};
export default Account