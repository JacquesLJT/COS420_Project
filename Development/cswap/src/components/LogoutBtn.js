import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';

function LogoutBtn() {
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
    <Button variant="outline" colorScheme="green" onClick={handleLogout}>
      Log out
    </Button>
  )
}

export default LogoutBtn