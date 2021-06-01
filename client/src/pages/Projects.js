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
                    <ProjectCard color={backgroundColors[0]} data={projects[0]} num={130} />
                    <ProjectCard color={backgroundColors[1]} data={projects[2]} num={125} />
                    <ProjectCard color={backgroundColors[2]} data={projects[3]} num={135} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[3]} data={projects[4]} num={120} />
                    <ProjectCard color={backgroundColors[4]} data={projects[5]} num={120} />
                    <ProjectCard color={backgroundColors[5]} data={projects[6]} num={120} />
                </div>
                <div className="container">
                    <ProjectCard color={backgroundColors[6]} data={projects[7]} num={130} />
                    <ProjectCard color={backgroundColors[7]} data={projects[8]} num={145} />
                    <ProjectCard color={backgroundColors[8]} data={projects[1]} num={150} />
                </div>
            </div >
            <Footer />
        </>
    )
}
