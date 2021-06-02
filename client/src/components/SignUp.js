import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignUp({ email, password, signUp, setEmail, setPassword }) {
    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="login-header">Sign Up</Card.Header>
                        <Card.Body>
                            <form onSubmit={(e) => signUp(e)} className="form__group">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form__input" id="email" placeholder="Email" required style={{ border: "solid 2px #6ed3e7" }} />
                                <label for="name" className="form__label">Email</label>
                                <br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" id="password" placeholder="Password" required style={{ border: "solid 2px #6ed3e7" }} />
                                <label for="password" className="form__label">Password</label>
                                <div className="btn-div">
                                    <button className="login-btn first-login" type="submit">Submit</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
