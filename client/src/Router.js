import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import UserAuth from "./pages/UserAuth/UserAuth";

export default function Router() {

    const [theme, setTheme] = useState("Light!");

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home theme={theme} />
                </Route>
                <Route exact path="/projects">
                    <Projects theme={theme} />
                </Route>
                <Route exact path="/skills">
                    <Skills theme={theme} setTheme={setTheme} />
                </Route>
                <Route exact path="/aboutme">
                    <AboutMe theme={theme} />
                </Route>
                <Route exact path="/userauth">
                    <UserAuth theme={theme} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
