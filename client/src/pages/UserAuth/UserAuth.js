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

export default function UserAuth({ theme }) {

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
        <div className={theme ? "u-wrapper" : "u-wrapper-dark"}>
            <Container fluid>
                <Row>
                    <Col>
                        <Navs theme={theme} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={theme ? "u-header" : "u-header-dark"}>
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
                                    theme={theme}
                                />
                            )}
                            {loggedIn === true && (
                                <SignedIn
                                    signOut={signOut}
                                    email={userEmail}
                                    theme={theme}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
