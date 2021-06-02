import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function SignUp({ email, password, signUp, setEmail, setPassword, theme }) {
    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <Card className={theme ? "" : "signup-card-dark"}>
                        <Card.Header className={theme ? "login-header" : "login-header-dark"}>Sign Up</Card.Header>
                        <Card.Body>
                            <form onSubmit={(e) => signUp(e)}>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className={theme ? "form__input" : "form__input-dark"} id="email" placeholder="Email" required style={theme ? { border: "solid 2px #8900f2" } : { border: "solid 2px #6ed3e7" }} />
                                <label for="name" className={theme ? "form__label" : "form__label-dark"}>Email</label>
                                <br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={theme ? "form__input" : "form__input-dark"} id="email" placeholder="Email" required style={theme ? { border: "solid 2px #8900f2" } : { border: "solid 2px #6ed3e7" }} />
                                <label for="password" className={theme ? "form__label" : "form__label-dark"}>Password</label>
                                <div className="btn-div">
                                    <button className={theme ? "login-btn first-login" : "login-btn-dark first-login-dark"} type="submit">Submit</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
