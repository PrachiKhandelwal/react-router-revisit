import React, { useRef } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if (usernameRef.current?.value && passwordRef.current?.value) {
            localStorage.setItem("uname", usernameRef.current.value);
            localStorage.setItem("pwd", passwordRef.current.value);
            navigate("/posts");
        }
    };
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    return (
        <form>
            <label htmlFor="uName">Username</label>
            <br />
            <input id="uName" ref={usernameRef} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" ref={passwordRef} />
            <br />
            <button onClick={submitHandler}>Login</button>
        </form>
    );
};

export default Login;
