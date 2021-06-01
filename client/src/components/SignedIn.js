import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignedIn({ signOut, email }) {
    return (
        <Container className="justify-content-md-center login-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header style={{ backgroundColor: "#6ed3e7", paddingLeft: "100px", paddingRight: "100px", textAlign: "center" }}>
                            <h1 className="skills-font" style={{ backgroundColor: "#6ed3e7", color: "white" }}>Welcome {email}</h1>
                        </Card.Header>
                        <Card.Body style={{ backgroundColor: "white" }}>
                            <div style={{ backgroundColor: "white" }}>
                                <p className="skills-font" style={{ backgroundColor: "white" }}>You are now considered "logged in" to the webpage.</p>
                                <p className="skills-font" style={{ backgroundColor: "white" }}>If you look in the dev tools and check the Application tab, you can see a JSON Web Token in the cookie storage.</p>
                                <p className="skills-font" style={{ backgroundColor: "white" }}>The application checks to see if there is a token in storage and then verifies that it originated from this webpage.</p>
                                <p className="skills-font" style={{ backgroundColor: "white" }}>When you click the Logout button, the application deletes the token which resets the page.</p>
                            </div>
                            <form onSubmit={(e) => signOut(e)} className="form__group" style={{ backgroundColor: "white" }}>
                                <div style={{ backgroundColor: "white" }} className="justify-content-md-center">
                                    <button className="login-btn first-login" type="submit">Logout</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
