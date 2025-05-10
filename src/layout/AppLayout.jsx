import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AppLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            <div style={{ flexGrow: 1, padding: "1rem" }}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default AppLayout;
