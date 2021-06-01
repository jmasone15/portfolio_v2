import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AuthCard({ changePage }) {
    return (
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
    )
}
