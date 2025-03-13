import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

export const ProtectedRoute = ({children}) => {
    const {user}=useAuth();
    if(!user){
        return <Navigate to='/' replace/>
    }
    return children;
}
