import React from "react";
import { Link, Navigate,  } from "react-router";

const RequireAuth = ({ children }) => {
    const userName = localStorage.getItem("uname");
    const password = localStorage.getItem("pwd");
    if (userName && password === "pwd") {
        return children;
    }
    return <Navigate to="/login" replace/>
    // return (
    //     <>
    //         <div>You are not authorized to access this page</div>
    //         <p><Link to="/login">Login here</Link> to view this page</p>
    //     </>
    // );
};

export default RequireAuth;
