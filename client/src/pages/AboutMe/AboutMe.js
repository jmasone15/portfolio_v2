import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import pageTransition from "../../utils/animations/pageTrans";
import "./aboutme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe({ theme, currentPage, setCurrentPage }) {

    // For Page Transition
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("project");
        pageTransition(screen, body);
        aboutMeFadeIn()
    });

    const aboutMeFadeIn = () => {
        setInterval(aboutMeShow, 170);
    };

    const aboutMeShow = () => {
        const target = document.getElementById("a-load-fade");
        if (target) {
            let opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));

            if (opacity < 1) {
                opacity += 0.1;
                target.style.opacity = opacity
            } else {
                clearInterval(0);
            }
        }
    }



    return (
        <div className={theme ? "a-wrapper" : "a-wrapper-dark"}>
            <div className="load-container">
                <div className={theme ? "a-load-screen" : "a-load-screen-dark"} ref={(el) => (screen = el)}>
                    <h1 className={theme ? "a-load-text" : "a-load-text-dark"} id="a-load-fade">about me</h1>
                </div>
            </div>
            <Container fluid data-barba="container" className="home">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="a-header">
                                <h1 style={theme ? {} : { color: "white" }}>about me</h1>
                                <h5 style={theme ? { color: "#8900f2" } : { color: "#6ed3e7" }}>blah blah blah blah blah blah blah blah blah blah blah blah</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
