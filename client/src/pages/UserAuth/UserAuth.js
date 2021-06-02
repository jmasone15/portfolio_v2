import React, { useState, useContext } from "react";
import Footer from "../../components/Footer";
import Navs from "../../components/Navs";
import axios from "axios";
import AuthContext from "../../utils/context/AuthContext";
import UserContext from "../../utils/context/UserContext";
import SignUp from "../../components/SignUp";
import SignedIn from "../../components/SignedIn";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./userauth.css"

export default function UserAuth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { getLoggedIn } = useContext(AuthContext);
    const { loggedIn } = useContext(AuthContext);
    const { userEmail } = useContext(UserContext);

    async function signUp(e) {
        e.preventDefault();

        try {
            const signUpData = {
                email: email,
                password: password
            };

            await axios.post("/auth/signup", signUpData);
            await getLoggedIn();
        } catch (err) {
            console.error(err);
            alert(err.request.response);
        }
    }

    async function signOut(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
        await axios.get("/auth/logout");
        await getLoggedIn();
    }

    return (
        <div className="u-wrapper">
            <Container fluid>
                <Row>
                    <Col>
                        <Navs />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="u-header">
                            <h1>user auth demo</h1>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            {loggedIn === false && (
                                <SignUp
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    signUp={signUp}
                                />
                            )}
                            {loggedIn === true && (
                                <SignedIn
                                    signOut={signOut}
                                    email={userEmail}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
