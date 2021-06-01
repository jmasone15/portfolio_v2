import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignUp({ email, password, signUp, setEmail, setPassword }) {
    return (
        <Container className="justify-content-md-center login-container">
            <Row>
                <Col>
                    <Card>
                        <Card.Header style={{ backgroundColor: "#6ed3e7", paddingLeft: "200px", paddingRight: "200px" }}><h1 className="skills-font" style={{ backgroundColor: "#6ed3e7", color: "white" }}>Sign Up</h1></Card.Header>
                        <Card.Body style={{ backgroundColor: "white" }}>
                            <form onSubmit={(e) => signUp(e)} className="form__group" style={{ backgroundColor: "white" }}>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form__input" id="email" placeholder="Email" required style={{ border: "solid 2px #6ed3e7" }} />
                                <label for="name" className="form__label">Email</label>
                                <br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" id="password" placeholder="Password" required style={{ border: "solid 2px #6ed3e7" }} />
                                <label for="password" className="form__label">Password</label>
                                <div style={{ backgroundColor: "white" }} className="justify-content-md-center">
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
