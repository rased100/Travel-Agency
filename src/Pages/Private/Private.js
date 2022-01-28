import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Private = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email) {
        console.log('ch user', user)
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;