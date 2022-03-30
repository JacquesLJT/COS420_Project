import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewLogin from './components/NewLogin';
import NewSignup from './components/NewSignup';
import CreateListing from './components/CreateListing';
import ForgotPassword from './components/ForgotPassword';

import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import "./App.css";

function App() {
  return (
    <ChakraProvider>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<NewLogin />} />
              <Route path="/signup" element={<NewSignup />} />
              <Route path="/createListing/*" element={<CreateListing/>} />
              <Route path="/ForgotPassword" element={<ForgotPassword/>} />
            </Routes>
          </UserAuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
