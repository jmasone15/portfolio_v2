import React from 'react';
import Footer from '../components/Footer';
import Navs from "../components/Navs";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

    const backgroundColors = [
        "#FFADAD",
        "#FFD6A5",
        "#FDFFB6",
        "#CAFFBF",
        "#9BF6FF",
        "#A0C4FF",
        "#BDB2FF",
        "#FFC6FF",
        "#ffc8dd"
    ]

    return (
        <>
            <Navs />
            <div className="p-header">
                <h1>projects</h1>
            </div>
            <div className="p-body">
                <h5>blah blah blah blah blah blah blah blah blah blah blah blah</h5>
            </div>
            <div className="p-container">
                <div className="container">
                    <ProjectCard color={backgroundColors[0]} />
                    <ProjectCard color={backgroundColors[1]} />
                    <ProjectCard color={backgroundColors[2]} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[3]} />
                    <ProjectCard color={backgroundColors[4]} />
                    <ProjectCard color={backgroundColors[5]} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[6]} />
                    <ProjectCard color={backgroundColors[7]} />
                    <ProjectCard color={backgroundColors[8]} />
                </div>
            </div >
            <Footer />
        </>
    )
}
