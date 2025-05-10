import React from "react";
import { Link, useNavigate, useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    const navigate=useNavigate();
    const backHandler=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Something went wrong !</h1> 
            <p>{err.data}. Status code {err.status}</p>
            <Link onClick={backHandler}>Go Back</Link>
        </div>
    );
};

export default Error;
