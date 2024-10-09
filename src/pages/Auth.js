import React, { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Login from '../Component/Login';
import Register from '../Component/Register';
import ResetPassword from '../Component/ResetPassword';

const AuthPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    );
};

export default AuthPage;