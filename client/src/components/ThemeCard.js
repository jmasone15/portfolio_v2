import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function ThemeCard({ theme, setTheme }) {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="auth-title">Theme Switcher</Card.Title>
                            <Row className="font">
                                <Col className="auth-border">
                                    <Card.Text >
                                        I am a firm believer in the idea that every project needs a theme switcher. A theme switcher switches the color palette of the entire webpage.
                                    </Card.Text>
                                    <Card.Text >
                                        Adding a theme switcher to any project adds an extra level of UI customization for users to enjoy.
                                    </Card.Text>
                                </Col>
                                <Col className="theme-body">
                                    <Card.Text>
                                        <h4 >Try it out!</h4>
                                    </Card.Text>
                                    <Card.Text>
                                        <form>
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
        </Container >
    )
}
