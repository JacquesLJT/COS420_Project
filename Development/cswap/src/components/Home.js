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
import React from 'react';
import { Formik, Form } from 'formik';
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';

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
    <Center h="100vh" bg="#013220">
      <Stack boxShadow="md" bg="whiteAlpha.900" p='20' rounded="md">
        <div className="p-4 box mt-3 text-center">
          Hello Welcome <br />
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button colorScheme="green" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Stack>
    </Center>
  );
};

export default Home;
