import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import AboutMe from "./pages/AboutMe";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/socials" component={Socials} />
                <Route exact path="/aboutme" component={AboutMe} />
            </Switch>
        </BrowserRouter>
    )
}
