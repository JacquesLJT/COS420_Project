import logo from './logo.svg';

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
import Apartments from "./pages/Apartments";
import Textbooks from "./pages/Textbooks";
import Chat from "./pages/Chat";
import Accounts from "./pages/Accounts"
import AcctSettings from "./pages/AcctSettings";

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home/*"
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
          <Route path="/appliances" element={<Appliances/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/furniture" element={<Furniture/>} />
          <Route path="/apartments" element={<Apartments/>} />
          <Route path="/textbooks" element={<Textbooks/>} />
          <Route path="/Chat" element={<Chat/>} />
          <Route path="/accounts/*" element={<Accounts/>} />
          <Route path="/AcctSettings" element={<AcctSettings/>} />
        </Routes>
      </UserAuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
