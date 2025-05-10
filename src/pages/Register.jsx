import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        console.dir(e.target);
        navigate("/login");
    };
    
    return (
        <form>
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" />
            <br />
            <label htmlFor="uName">Username</label>
            <br />
            <input id="uName" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" />
            <br />
            <button onClick={submitHandler}>Register</button>
        </form>
    );
};

export default Register;
