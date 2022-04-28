import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import ReCaptchaV2 from 'react-google-recaptcha';
import {
  Center,
  Stack,
  Text,
  Button,
  Image,
  Input,
  InputLeftAddon,
  InputGroup,
  Alert
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import {AtSignIcon, LockIcon} from "@chakra-ui/icons";
import { doc, getDoc, setDoc} from "firebase/firestore";
import { auth, db } from "../firebase";
import { isEmpty } from '@firebase/util';

export default function NewSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
        return setError('Passwords do not match');
    }

    try {
        setError('');
        await signUp(email, password);
        const userData =  {
            UID: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            phoneNumber: auth.currentUser.phoneNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        let docRef = doc(db, `users/${auth.currentUser.uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            navigate('/');
        } else {
            await setDoc (docRef, {userData});
            navigate('/');
        }
    } catch (err) {
        setError(err.message);
    }

    const componentDidMount = () => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

  };

    return (
        <Center h="100vh" bg="#013220">
            <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
            <Center><Image
                  mt={-75}
                  mb={-15}
                  width='200px'
                  src='CSwapLogo.png'
                  alt='CSwap'
                /></Center>
                {error && <Alert status="error">{error}</Alert>}

                <Formik
                    onSubmit={(values, { setSubmitting }) => {
                        alert(
                            JSON.stringify(
                                {
                                    captcha: values.captcha,
                                },
                                null,
                                2
                            )
                        );
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                        }, 1000);
                    }}
                    initialValues={{ email: "", password: "", confirmPassword: "", captcha: "" }}
                >
                    {({ isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack my="4" spacing="6">
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<AtSignIcon />} />
                                    <Input
                                        className='email'
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<LockIcon />} />
                                    <Input
                                        className='password'
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<LockIcon />} />
                                    <Input
                                        className='password'
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name='password'
                                        type='password'
                                        placeholder='Confirm Password'
                                        onChange={e => setConfirmPassword(e.target.value)}
                                    />
                                </InputGroup>
                                <Button 
                                    isLoading={isSubmitting}
                                    loadingText="Signing up..."
                                    size="lg"
                                    colorScheme="green"
                                    type="submit"
                                    data-toggle="tooltip" data-placement="top" title="What're you waiting for? Sign up!"
                                >
                                    Sign up
                                </Button>
                                <Center>
                                    <ReCaptchaV2 sitekey="6Lev364eAAAAAATr86taI5SQXVmuoctviwTvv-hS" />
                                </Center>
                            </Stack>
                        </Form>
                    )}
                </Formik>

                <Stack justify="center" color="gray.600" spacing="3">
                        <Text as="div" textAlign="center">
                            <span>Already have an account? </span>
                            <Button colorScheme="green" variant="link">
                                <Link to="/">Sign in</Link>
                            </Button>
                        </Text>
                </Stack>
            </Stack>
        </Center>
    );
};
