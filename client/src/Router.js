import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import UserAuth from "./pages/UserAuth/UserAuth";

export default function Router() {

    const [theme, setTheme] = useState(false);
    const [currentPage, setCurrentPage] = useState("");


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/project">
                    <Projects theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/skills">
                    <Skills theme={theme} setTheme={setTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/aboutme">
                    <AboutMe theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/userauth">
                    <UserAuth theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
