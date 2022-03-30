import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewLogin from './components/NewLogin';
import NewSignup from './components/NewSignup';
import CreateListing from './components/CreateListing';
import ForgotPassword from './components/ForgotPassword';
import ForgotPasswordSubmit from './pages/ForgotPasswordSubmit';
import Appliances from "./pages/Appliances";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Rentals from "./pages/Rentals";
import Textbooks from "./pages/Textbooks";

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
              <Route path="/ForgotPasswordSubmit" element={<ForgotPasswordSubmit/>} />
              <Route path="/Appliances" element={<Appliances/>} />
              <Route path="/Electronics" element={<Electronics/>} />
              <Route path="/Furniture" element={<Furniture/>} />
              <Route path="/Rentals" element={<Rentals/>} />
              <Route path="/Textbooks" element={<Textbooks/>} />
            </Routes>
          </UserAuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
