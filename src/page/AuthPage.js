import React, { useState } from 'react';
import { Router, Routes, Route} from 'react-router-dom';
import Login from '../component/Login';
import Register from '../component/Register';
import ResetPassword from '../component/ResetPassword';

const AuthPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />}/>
            </Routes>
       
    );
};

export default AuthPage;
