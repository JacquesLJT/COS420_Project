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
    Image
} from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {AtSignIcon, LockIcon} from "@chakra-ui/icons";
import { useUserAuth } from '../context/UserAuthContext';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
// import './Login.css';

export default function NewLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { logIn, googleSignIn, facebookSignIn } = useUserAuth();
    const navigate = useNavigate();

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
  
    const handleGoogleSignIn = async e => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate('/home');
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const handleFacebookSignIn = async e => {
      e.preventDefault();
      try {
        await facebookSignIn();
        navigate('/home');
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
        <Center h="100vh" bg="#013220">
            <Stack boxShadow="md" bg="whiteAlpha.900" p='20' rounded="md">
            <Center><Image
                  mt={-75}
                  mb={-15}
                  width='200px'
                  src='CSwapLogo.png'
                  alt='CSwap'
                /></Center>
                {error && <Alert status='error'>{error}</Alert>}

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
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<AtSignIcon/>}/>
                                    <Input
                                        className="email"
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="email" 
                                        type="email" 
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderColor='gray.300' boxShadow='4px 3px 5px #ccc9c6' children={<LockIcon/>}/>
                                    <Input 
                                        className="password" 
                                        borderColor='gray.300'
                                        borderWidth='1px'
                                        boxShadow='4px 3px 5px #ccc9c6'
                                        variant='filled'
                                        name="password" 
                                        type="password" 
                                        placeholder='Password'
                                        onChange={e => setPassword(e.target.value)}
                                        />
                                </InputGroup>
                                <Button
                                    isLoading={isSubmitting}
                                    loadingText="Whispering to our servers..."
                                    size="lg"
                                    colorScheme="green"
                                    type="submit"
                                >
                                    Sign in
                                </Button>
                                <Button
                                    className="g-btn"
                                    size="lg"
                                    colorScheme="blue"
                                    onClick={handleGoogleSignIn}
                                    leftIcon={<FaGoogle />}
                                >
                                    Login with Google
                                </Button>
                                <Button
                                    className='fb-btn'
                                    size='lg'
                                    colorScheme='blue'
                                    onClick={handleFacebookSignIn}
                                    leftIcon={<FaFacebookSquare size={40} />}
                                >
                                    Login with Facebook
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>

                <Stack justify="center" color="gray.600" spacing="1">
                    <Text as="div" textAlign="center" mb={-1} pt={0}>
                        <span>Don&lsquo;t have an account? </span>
                        <Button colorScheme="green" variant="link">
                            <Link to="/signup">Sign up</Link>
                        </Button>
                    </Text>
                    <Button colorScheme="green" variant="link">
                        <Link to="/ForgotPassword">Forgot Password?</Link>
                    </Button>
                </Stack>
            </Stack>
        </Center>
    )
};