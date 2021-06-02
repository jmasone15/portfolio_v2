import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navs({ theme }) {

    const history = useHistory();

    const changePage = (e, target) => {
        e.preventDefault();
        history.push(target)
    }

    return (
        <Navbar collapseOnSelect expand="xs" variant="dark">
            <Navbar.Brand className="op0">Brand Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={theme ? "dropdown" : "dropdown-dark"}>
                <Container>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/")}>
                                <h1 className="first-drop-text">home</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/projects")}>
                                <h1 className="second-drop-text">projects</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/skills")}>
                                <h1 className="third-drop-text">skills</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/aboutme")}>
                                <h1 className="fourth-drop-text">about me</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}
