import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import ProjectCard from '../../components/ProjectCard';
import projects from "../../utils/projectData";
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

export default function Projects({ theme, currentPage, setCurrentPage }) {

    const lightBackgroundColors = [
        "#FFADAD",
        "#FFD6A5",
        "#FDFFB6",
        "#CAFFBF",
        "#9BF6FF",
        "#A0C4FF",
        "#BDB2FF",
        "#FFC6FF",
        "#ffc8dd"
    ];
    const darkBackgroundColors = [
        "#54478c",
        "#2c699a",
        "#048ba8",
        "#0db39e",
        "#16db93",
        "#83e377",
        "#b9e769",
        "#efea5a",
        "#f1c453"
    ];

    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("project");
        var tl = new TimelineMax();
        tl.to(screen, {
            duration: 1.2,
            height: "100%",
            ease: Power3.easeInOut,
        });
        tl.to(screen, {
            duration: 1,
            top: "100%",
            ease: Power3.easeInOut,
            delay: 0.3,
        });
        tl.set(screen, { right: "-100%" });
        TweenMax.to(body, .3, {
            css: {
                opacity: "1",
                pointerEvents: "auto",
                ease: Power4.easeInOut
            }
        }).delay(2);
        return () => {
            TweenMax.to(body, 1, {
                css: {
                    opacity: "0",
                    pointerEvents: 'none'
                }
            });
        }
    });

    return (
        <div className={theme ? "p-wrapper" : "p-wrapper-dark"}>
            <div className="load-container">
                <div className="load-screen1" ref={(el) => (screen = el)}></div>
            </div>
            <Container fluid data-barba="container" className="projects">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row>
                        <div className="p-header">
                            <h1 style={theme ? { color: "black" } : { color: "white" }}>projects</h1>
                            <h5 style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}>This is my portfolio of various projects I have worked on and am currently working on.</h5>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[0] : darkBackgroundColors[0]} data={projects[0]} num={140} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[1] : darkBackgroundColors[1]} data={projects[2]} num={140} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[2] : darkBackgroundColors[2]} data={projects[3]} num={150} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[3] : darkBackgroundColors[3]} data={projects[4]} num={120} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[4] : darkBackgroundColors[4]} data={projects[5]} num={120} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[5] : darkBackgroundColors[5]} data={projects[6]} num={120} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[6] : darkBackgroundColors[6]} data={projects[7]} num={130} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[7] : darkBackgroundColors[7]} data={projects[8]} num={145} />
                            </Col>
                            <Col>
                                <ProjectCard theme={theme} color={theme ? lightBackgroundColors[8] : darkBackgroundColors[8]} data={projects[1]} num={150} />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div >
    )
}
