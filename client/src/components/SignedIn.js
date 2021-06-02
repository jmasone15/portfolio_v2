import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignedIn({ signOut, email }) {
    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="login-header">Welcome {email}</Card.Header>
                        <Card.Body className="font">
                            <div>
                                <p>You are now considered "logged in" to the webpage.</p>
                                <p>If you look in the dev tools and check the Application tab, you can see a JSON Web Token in the cookie storage.</p>
                                <p>The application checks to see if there is a token in storage and then verifies that it originated from this webpage.</p>
                                <p>When you click the Logout button, the application deletes the token which resets the page.</p>
                            </div>
                            <form onSubmit={(e) => signOut(e)} className="form__group">
                                <div className="btn-div">
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
