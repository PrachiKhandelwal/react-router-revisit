import React from "react";
import { Link, Outlet } from "react-router";

const Home = () => {
    return (
        <div style={{display:"flex",flexDirection:'column',gap:'1rem'}}>
            <div>Welcome</div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Outlet />
        </div>
    );
};

export default Home;
