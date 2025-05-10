import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
