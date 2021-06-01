import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../style.css"

export default function Footer() {
    return (
        <div className="fixed-bottom footer">
            <Navbar variant="dark" style={{ justifyContent: "center" }}>
                <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" style={{ color: "white" }}> Jordan Masone </a></p>
            </Navbar>
        </div>
    )
}
