import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function Navs() {

    const history = useHistory();

    const changePage = (e, target) => {
        e.preventDefault();
        history.push(target)
    }

    return (
        <Navbar collapseOnSelect expand="xs" variant="dark">
            <Navbar.Brand className="op0">Brand Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="dropdown">
                <div className="first-drop" onClick={(e) => changePage(e, "/")}>
                    <h1 className="first-drop-text">home</h1>
                </div>
                <div className="second-drop" onClick={(e) => changePage(e, "/projects")}>
                    <h1 className="second-drop-text">projects</h1>
                </div>
                <div className="third-drop" onClick={(e) => changePage(e, "/skills")}>
                    <h1 className="third-drop-text">skills</h1>
                </div>
                <div className="fourth-drop" onClick={(e) => changePage(e, "/aboutme")}>
                    <h1 className="fourth-drop-text">about me</h1>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
