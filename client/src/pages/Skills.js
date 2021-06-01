import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';
import Navs from "../components/Navs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {

    const history = useHistory();

    const changePage = (e, link) => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <>
            <Navs />
            <div className="s-header">
                <h1>skills</h1>
            </div>
            <div className="s-body">
                <h5>This page showcases some of my skills in full stack development</h5>
            </div>
            <div className="s-container">
                <Container>
                    <Row>
                        <Col style={{ marginRight: "100px" }}>
                            <Card style={{ color: "black", backgroundColor: "white" }}>
                                <Card.Body style={{ backgroundColor: "white" }}>
                                    <Card.Title className="skills-font" style={{ backgroundColor: "white", fontSize: "30px" }}>User Authentication</Card.Title>
                                    <Row style={{ backgroundColor: "white" }}>
                                        <Col style={{ backgroundColor: "white", borderRight: "solid 1px" }}>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white" }}>
                                                One of my best skills is my ability to build out custom user authentication logic for any type of project.
                                            </Card.Text>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white" }}>
                                                Whether it be a simple login and logout system. Or multiple complex routes for data management, I have the skills and tools necessary to build it.
                                            </Card.Text>
                                        </Col>
                                        <Col style={{ backgroundColor: "white" }}>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white" }}>
                                                My user authentication uses these technologies,
                                            </Card.Text>
                                            <Card.Text>
                                                <ul className="skills-font" style={{ backgroundColor: "white" }}>
                                                    <li className="skills-font" style={{ backgroundColor: "white" }}>Node.js</li>
                                                    <li className="skills-font" style={{ backgroundColor: "white" }}>JWT</li>
                                                    <li className="skills-font" style={{ backgroundColor: "white" }}>bcryptjs</li>
                                                    <li className="skills-font" style={{ backgroundColor: "white" }}>Cookies</li>
                                                </ul>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Button className="skills-font" onClick={(e) => changePage(e, "/userauth")} style={{ backgroundColor: "#6ed3e7", color: "white", border: "white", marginTop: "10px" }}>Try it Out!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ marginTop: "100px" }}>
                    <Row>
                        <Col style={{ marginRight: "100px" }}>
                            <Card style={{ color: "black", backgroundColor: "white" }}>
                                <Card.Body style={{ backgroundColor: "white" }}>
                                    <Card.Title className="skills-font" style={{ backgroundColor: "white", fontSize: "30px" }}>Theme Switcher</Card.Title>
                                    <Row style={{ backgroundColor: "white" }}>
                                        <Col style={{ backgroundColor: "white", borderRight: "solid 1px" }}>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white" }}>
                                                I am a firm believer in the idea that every project needs a theme switcher. A theme switcher switches the color palette of the entire webpage.
                                            </Card.Text>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white" }}>
                                                Adding a theme switcher to any project adds an extra level of UI customization for users to enjoy.
                                            </Card.Text>
                                        </Col>
                                        <Col style={{ backgroundColor: "white" }}>
                                            <Card.Text className="skills-font" style={{ backgroundColor: "white", textAlign: "center" }}>
                                                <h4 className="skills-font" style={{ backgroundColor: "white" }}>Try it out!</h4>
                                            </Card.Text>
                                            <Card.Text>
                                                <form>
                                                    <p className="skills-font" style={{ backgroundColor: "white" }}>Theme switcher here</p>
                                                </form>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}
