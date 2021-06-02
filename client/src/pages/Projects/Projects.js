import React from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import ProjectCard from '../../components/ProjectCard';
import projects from "../../utils/projectData";
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

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
        <div className="p-wrapper">
            <Container fluid>
                <Row>
                    <Col>
                        <Navs />
                    </Col>
                </Row>
                <Row>
                    <div className="p-header">
                        <h1 style={{ color: "white" }}>projects</h1>
                        <h5 style={{ color: "#64daf1" }}>This is my portfolio of various projects I have worked on and am currently working on.</h5>
                    </div>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <ProjectCard color={backgroundColors[0]} data={projects[0]} num={140} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[1]} data={projects[2]} num={140} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[2]} data={projects[3]} num={150} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProjectCard color={backgroundColors[3]} data={projects[4]} num={120} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[4]} data={projects[5]} num={120} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[5]} data={projects[6]} num={120} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProjectCard color={backgroundColors[6]} data={projects[7]} num={130} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[7]} data={projects[8]} num={145} />
                        </Col>
                        <Col>
                            <ProjectCard color={backgroundColors[8]} data={projects[1]} num={150} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
