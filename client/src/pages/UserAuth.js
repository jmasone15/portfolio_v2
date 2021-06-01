import React, { useState, useContext } from "react";
import Footer from "../components/Footer";
import Navs from "../components/Navs";
import axios from "axios";
import AuthContext from "../utils/context/AuthContext";
import UserContext from "../utils/context/UserContext";
import SignUp from "../components/SignUp";
import SignedIn from "../components/SignedIn";

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

    async function signOut(e, page) {
        e.preventDefault();
        await axios.get("/auth/logout");
        await getLoggedIn();
    }

    return (
        <>
            <Navs />
            <div className="s-header">
                <h1>user auth demo</h1>
            </div>
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
            <Footer />
        </>
    )
}
