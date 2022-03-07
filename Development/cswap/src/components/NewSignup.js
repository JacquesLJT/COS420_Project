import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import ReCaptchaV2 from 'react-google-recaptcha';
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
import { Formik, Form } from 'formik';
import {AtSignIcon, LockIcon} from "@chakra-ui/icons";

const NewSignup = () => {
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
        navigate('/');
    } catch (err) {
        setError(err.message);
    }
  };

    return (
        <Center h="100vh" bg="#013220">
            <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
                <Heading as="h1">Sign up for CSwap.</Heading>
                <Text fontSize="lg" color="gray.600">
                    Please complete the following to register.
                </Text>
                {error && <Alert status="error">{error}</Alert>}

                <Formik
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                        }, 1000);
                    }}
                    initialValues={{ email: "", password: "" }}
                >
                    {({ isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack my="4" spacing="6">
                                <InputGroup>
                                    <InputLeftAddon children={<AtSignIcon />} />
                                    <Input
                                        className='email'
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon children={<LockIcon />} />
                                    <Input
                                        className='password'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon children={<LockIcon />} />
                                    <Input
                                        className='password'
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
                                <Link to="/">Log in</Link>
                            </Button>
                        </Text>
                </Stack>
            </Stack>
        </Center>
    );
};

export default NewSignup;