/* eslint-disable react/prop-types */
// import React from 'react';

import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import useAuth from "../hooks/useAuth";

  


const PrivateRouts = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Loading/>
    }
    if (user) {
        return <div>
            {children}
        </div>

    }
    return <Navigate to={'/register'}></Navigate>;
};

export default PrivateRouts;