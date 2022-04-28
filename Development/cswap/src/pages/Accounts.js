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
  import React, { useEffect, useState } from 'react';
// import { doc, setDoc, getDoc} from "firebase/firestore";   // Use these to access the database, most likely getDoc
  import { Link, useNavigate } from 'react-router-dom';
  import { useUserAuth } from '../context/UserAuthContext';
  import { getAuth } from "firebase/auth";
  import Navbar from '../components/Navbar';
// import { auth, db } from "../firebase";

//  let docRef = doc(db, `users/${auth.currentUser.uid}`);    Reference current users data in database
//  getDoc (docRef, {userData})
//  if this makes no sense go to NewSignup.js line 49 or read https://firebase.google.com/docs/firestore/query-data/get-data

// NEED TO BE ABLE TO PASS UID INTO ACCOUNT TO MAKE THE PAGE WORK CORRECTLY.
const Account = (uid) => {
    //const getUser = auth.currentUser
    //const user = getUser.uid
    const user = getAuth().getUser(uid);    // To just get UID, use auth.currentUser.uid & import the commented libraries above
    const displayName = user.displayName;   // name will be user.displayName etc.

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