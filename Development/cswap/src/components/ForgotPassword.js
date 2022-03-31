import {
    Center,
    Stack,
    Button,
    Input,
    InputLeftAddon,
    InputGroup,
    Alert,
    Image
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { AtSignIcon } from '@chakra-ui/icons';
import { useUserAuth } from '../context/UserAuthContext';

export default function ForgotPassword(){

    const {resetPassword} = useUserAuth();
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        if (email !== confirmEmail) {
            return setError('Emails do not match');
        }
        else if (email === '' || confirmEmail === '') {
            return setError('Please enter your email');
        }

        try {
            await resetPassword(email);
            navigate('../ForgotPasswordSubmit');
        } catch (err) {
            setError(err.message);
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
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 1000);
                }}
                initialValues={{ email: '' }}
            >
                {({ isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <Stack my="4" spacing="6">
                            <InputGroup>
                                <InputLeftAddon borderColor="gray.300" boxShadow="4px 3px 5px #ccc9c6" children={<AtSignIcon />} />
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
                                <InputLeftAddon borderColor="gray.300" boxShadow="4px 3px 5px #ccc9c6" children={<AtSignIcon />} />
                                <Input
                                    className="email"
                                    borderColor='gray.300'
                                    borderWidth='1px'
                                    boxShadow='4px 3px 5px #ccc9c6'
                                    variant='filled'
                                    name="email" 
                                    type="email" 
                                    placeholder='Confirm Email'
                                    onChange={e => setConfirmEmail(e.target.value)}
                                    />
                            </InputGroup>
                            <Button
                                isLoading={isSubmitting}
                                loadingText="Whispering to our servers..."
                                size="lg"
                                colorScheme="green"
                                type="submit"
                            >
                                Reset Password
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <Button colorScheme="green" variant="link">
                <Link to="/">Back to Login</Link>
            </Button>
            </Stack>

        </Center>
    )

}