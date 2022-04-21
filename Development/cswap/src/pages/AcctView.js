import { 
    Center,
    Stack,
    Text, 
    Button,
    Input, 
    InputLeftAddon, 
    InputGroup,
    Alert,
    Image
} from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import {AtSignIcon, LockIcon, InfoIcon, ChatIcon} from "@chakra-ui/icons";
import { useUserAuth } from '../context/UserAuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from "firebase/auth";

export default function AcctView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { logIn} = useUserAuth();
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const displayName = user.displayName;
    const userEmail = user.email;
    const photoURL = user.photoURL;
    //add const for user number

    const handleSubmit = async e => {
      e.preventDefault();
      setError('');
      try {
        await logIn(email, password);
        navigate('/home');
      } catch (err) {
        setError(err.message);
      }
    };
    const navigateHome = async =>{
        navigate("/home");
    }
    return (
        <Center bg="#013220">
            <Stack boxShadow="md" bg="whiteAlpha.900" p='20' rounded="md">
            <Center><Image
                  mt={-75}
                  mb={-15}
                  width='200px'
                  src='CSwapLogo.png'
                  alt='CSwap'
                /></Center>
                {error && <Alert status='error'>{error}</Alert>}
                <Text as="div" textAlign="center" mb={-1} pt={0}>
                        <span>Account Settings</span>
                    </Text>
                <Formik
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                        }, 1000);
                    }}
                    initialValues={{ email: '', password: '' }}
                >
                    {({ isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack my="4" spacing="6">
                            <InputGroup width={500}>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<AtSignIcon/>}/>
                                    <Input
                                        className="currentEmail"
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="currentEmail" 
                                        type="email" 
                                        placeholder={userEmail}
                                        onChange={e => setEmail(e.target.value)} //TODO: validate and submit
                                        />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<AtSignIcon/>}/>
                                    <Input
                                        className="displayName"
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="displayName" 
                                        type="displayName" 
                                        placeholder={displayName}
                                        onChange={e => setEmail(e.target.value)} //TODO: submit
                                        />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<ChatIcon/>}/>
                                    <Input
                                        className="phone"
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="phone" 
                                        type="phone" 
                                        placeholder={'Phone Number'} // const for user number
                                        onChange={e => setEmail(e.target.value)} //TODO: submit to firebase
                                        />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<LockIcon/>}/>
                                    <Input 
                                        className="currentPassword" 
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="currentPassword" 
                                        type="password" 
                                        placeholder='Old Password'
                                        onChange={e => setPassword(e.target.value)} //TODO: add validation
                                        />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<LockIcon/>}/>
                                    <Input 
                                        className="newPassword" 
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="newPassword" 
                                        type="password" 
                                        placeholder='New Password'
                                        onChange={e => setPassword(e.target.value)} //TODO: submit to firebase
                                        />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<InfoIcon/>}/>
                                    <Input
                                        className="college"
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="college" 
                                        type="location" 
                                        placeholder='College' // Info from firebase
                                        onChange={e => setEmail(e.target.value)} //TODO: submit to firebase
                                        />
                                </InputGroup>
                                <Checkbox defaultChecked>Subscribe to our newsletter!</Checkbox>
                                <Button //Maybe make button do something? idk lol https://chakra-ui.com/docs/components/form/checkbox
                                    isLoading={isSubmitting}
                                    loadingText="Whispering to our servers..."
                                    size="lg"
                                    colorScheme="green"
                                    type="submit"
                                >
                                    Save
                                </Button>
                                
                                <Button
                                    className='cncl-btn'
                                    size='lg'
                                    colorScheme='red'
                                    onClick={navigateHome}
                                >
                                    Discard changes
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </Center>
    )
};