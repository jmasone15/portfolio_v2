import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../pages/Home/home.css";

export default function Footer() {
    return (
        <Navbar className="footer" fixed="bottom" variant="dark" style={{ justifyContent: "center" }}>
            <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" style={{ color: "white" }}> Jordan Masone </a></p>
        </Navbar>
    )
}
