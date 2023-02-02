import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

// Uses cookies to confirm authentication
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

// Below is assigning routes to protected or not. 
// Protected routes will require log in credentials to access
const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
        </Routes>
    );
};

export default Router;