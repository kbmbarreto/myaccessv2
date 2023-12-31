import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Password from './pages/Password';
import NewPassword from "./pages/NewPassword";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/password" element={<Password />} />
                <Route path="/newPassword" element={<NewPassword />} />
            </Routes>
        </BrowserRouter>
        );
}
