import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../style.css"

export default function Navs() {
    return (
        <Navbar collapseOnSelect expand="xs" variant="dark">
            <Navbar.Brand style={{ opacity: 0 }}>Brand Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="dropdown">
                <div className="first-drop">
                    <h1 className="first-drop-text">home</h1>
                </div>
                <div className="second-drop">
                    <h1 className="second-drop-text">portfolio</h1>
                </div>
                <div className="third-drop">
                    <h1 className="third-drop-text">links</h1>
                </div>
                <div className="fourth-drop">
                    <h1 className="fourth-drop-text">about me</h1>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
