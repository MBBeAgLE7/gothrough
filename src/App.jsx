import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Contexts/authContext';
import Header from './Components/Common/Header';
import Home from './Pages/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
