import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function ThemeCard() {
    return (
        <Container style={{ marginTop: "100px" }}>
            <Row>
                <Col style={{ marginRight: "100px" }}>
                    <Card className="bg-white" style={{ color: "black" }}>
                        <Card.Body className="bg-white">
                            <Card.Title className="skills-font bg-white" style={{ fontSize: "30px" }}>Theme Switcher</Card.Title>
                            <Row style={{ backgroundColor: "white" }}>
                                <Col className="bg-white" style={{ borderRight: "solid 1px" }}>
                                    <Card.Text className="skills-font bg-white" >
                                        I am a firm believer in the idea that every project needs a theme switcher. A theme switcher switches the color palette of the entire webpage.
                                    </Card.Text>
                                    <Card.Text className="skills-font bg-white" >
                                        Adding a theme switcher to any project adds an extra level of UI customization for users to enjoy.
                                    </Card.Text>
                                </Col>
                                <Col className="bg-white">
                                    <Card.Text className="skills-font bg-white" style={{ textAlign: "center" }}>
                                        <h4 className="skills-font bg-white" >Try it out!</h4>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <form className="bg-white">
                                            <label className="label">
                                                <div className="toggle">
                                                    <input className="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div className="indicator"></div>
                                                </div>
                                                <div className="label-text">Light!</div>
                                            </label>
                                        </form>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
