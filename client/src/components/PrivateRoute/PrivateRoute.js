import { isAuthenticated } from "../../services/LoginServices";
import React from "react";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    console.log(isAuthenticated());
    if(isAuthenticated()){
        return children;
    }else {
        return <Navigate to="/" replace />;
    }
}

