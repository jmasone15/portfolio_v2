import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import UserAuth from "./pages/UserAuth";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/userauth" component={UserAuth} />
            </Switch>
        </BrowserRouter>
    )
}
