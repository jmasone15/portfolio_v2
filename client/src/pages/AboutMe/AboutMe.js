import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
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
        setCurrentPage("aboutme");
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

    const history = useHistory();

    const changePage = (e) => {
        e.preventDefault();
        history.push("/contact");
    };


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
                                <h4 style={theme ? { color: "#8900f2" } : { color: "#6ed3e7" }}>Learn a little about me and what I can do for you</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt200">
                        <Col xl={6} className="mb175">
                            <Container>
                                <Row>
                                    <Col className="text-col">
                                        <div className={theme ? "text-div" : "text-div-dark"}>
                                            <h1 className={theme ? "text-header" : "text-header-dark"}>jordan masone</h1>
                                            <h5>I am a Full Stack Developer with a passion for creating modern UI experiences.</h5>
                                            <h5>With every project I work on, I bring <u>creative ideas</u>, effective <u>problem solving</u>, and a little <u>humor</u> to make things fun.</h5>
                                            <h5>Whatever goals you may have, I am ready to make them a reality. :)</h5>
                                        </div>
                                        <br />
                                        <div className={theme ? "text-div" : "text-div-dark"}>
                                            <h4 className={theme ? "text-header" : "text-header-dark"}>A little about me...</h4>
                                            <h5>Born in Long Island, New York (Go Islanders!!!). Currently located in Orlando, FL.</h5>
                                            <h5>Huge video game and Nintendo nerd, always down to play some Super Smash Bros.</h5>
                                            <h5>Food may be my biggest passion, not cooking it just eating it.</h5>
                                        </div>
                                        <div style={{ textAlign: "center", marginTop: "75px" }}>
                                            <button className={theme ? "contact-btn first-contact" : "contact-btn-dark first-contact-dark"} onClick={(e) => changePage(e)}>Let's build something!</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={6} style={{ marginTop: "-100px" }}>
                            <Container>
                                <Row>
                                    <Col>
                                        <div style={{ textAlign: "center" }}>
                                            <div className="images-selector">
                                                <span className={theme ? "img-card img1" : "img-card-dark img1"} ></span>
                                                <span className={theme ? "img-card img2" : "img-card-dark img2"}></span>
                                                <span className={theme ? "img-card img3" : "img-card-dark img3"} ></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
