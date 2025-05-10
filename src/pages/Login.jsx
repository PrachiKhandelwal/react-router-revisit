import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const submitHandler = (e) => {
      e.preventDefault();
        navigate("/");
    };
    return (
        <form>
            <label htmlFor="uName">Username</label>
            <br />
            <input id="uName" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" />
            <br />
            <button onClick={submitHandler}>Login</button>
        </form>
    );
};

export default Login;
