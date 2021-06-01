import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import AuthCard from '../../components/AuthCard';
import ThemeCard from '../../components/ThemeCard';
import "./skills.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {

    const history = useHistory();

    const changePage = (e, link) => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <>
            <Navs />
            <div className="s-header">
                <h1>skills</h1>
            </div>
            <div className="s-body">
                <h5>This page showcases some of my skills in full stack development</h5>
            </div>
            <div className="s-container">
                <AuthCard changePage={changePage} />
                <ThemeCard />
            </div>
            <Footer />
        </>
    )
}
