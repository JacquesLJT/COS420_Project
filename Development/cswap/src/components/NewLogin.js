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
    Alert
} from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {AtSignIcon, LockIcon} from "@chakra-ui/icons";
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import { FaFacebookSquare } from 'react-icons/fa';

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
            <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
                <Heading as="h1" textAlign="center">CSwap</Heading>
                <Text fontSize="lg" color="gray.600">
                    Please log in with the data you entered during registration.
                </Text>
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
                                    <InputLeftAddon children={<AtSignIcon/>}/>
                                    <Input
                                        className="email"
                                        name="email" 
                                        type="email" 
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon children={<LockIcon/>}/>
                                    <Input 
                                        className="password" 
                                        name="password" 
                                        type="password" 
                                        placeholder='Password'
                                        onChange={e => setPassword(e.target.value)}
                                        />
                                </InputGroup>
                                <Checkbox colorScheme="green">Keep me logged in</Checkbox>
                                <Button
                                    isLoading={isSubmitting}
                                    loadingText="Whispering to our servers..."
                                    size="lg"
                                    colorScheme="green"
                                    type="submit"
                                >
                                    Sign in
                                </Button>
                                <GoogleButton
                                    className='g-btn'
                                    type='dark'
                                    onClick={handleGoogleSignIn}
                                />
                                <Button
                                    className='fb-btn'
                                    size='lg'
                                    colorScheme='blue'
                                    onClick={handleFacebookSignIn}
                                    leftIcon={<FaFacebookSquare size={40} />}
                                >
                                    Sign in with Facebook
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>

                <Stack justify="center" color="gray.600" spacing="3">
                    <Text as="div" textAlign="center">
                        <span>Don&lsquo;t have an account? </span>
                        <Button colorScheme="green" variant="link">
                            <Link to="/signup">Sign up</Link>
                        </Button>
                    </Text>
                    <Button colorScheme="green" variant="link">
                        Forgot password?
                    </Button>

                </Stack>
            </Stack>
        </Center>
    )
};