import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../pages/Home/home.css";

export default function Footer() {
    return (
        <div className="fixed-bottom footer">
            <Navbar variant="dark" style={{ justifyContent: "center" }}>
                <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" className="white"> Jordan Masone </a></p>
            </Navbar>
        </div>
    )
}
