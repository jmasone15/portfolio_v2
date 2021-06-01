import React from 'react';
import Footer from '../components/Footer';
import Navs from "../components/Navs";
import ProjectCard from '../components/ProjectCard';
import projects from "../utils/projectData";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <h5>This is my portfolio of various projects I have worked on and am currently working on.</h5>
            </div>
            <div className="p-container">
                <div className="container">
                    <ProjectCard color={backgroundColors[0]} data={projects[0]} />
                    <ProjectCard color={backgroundColors[1]} data={projects[2]} />
                    <ProjectCard color={backgroundColors[2]} data={projects[3]} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[3]} data={projects[4]} />
                    <ProjectCard color={backgroundColors[4]} data={projects[5]} />
                    <ProjectCard color={backgroundColors[5]} data={projects[6]} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[6]} data={projects[7]} />
                    <ProjectCard color={backgroundColors[7]} data={projects[8]} />
                    <ProjectCard color={backgroundColors[8]} data={projects[1]} />
                </div>
            </div >
            <Footer />
        </>
    )
}
