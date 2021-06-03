import React, { useRef, useEffect } from "react";
import Header from "../../components/Header";
import Navs from "../../components/Navs";
import Footer from "../../components/Footer";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

export default function Home({ theme, currentPage, setCurrentPage }) {

    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        setCurrentPage("home");
        let tl = new TimelineMax();
        tl.to(screen, {
            duration: 1.2,
            width: "100%",
            left: "0%",
            ease: Power3.easeInOut,
        });
        tl.to(screen, {
            duration: 1,
            left: "100%",
            ease: Power3.easeInOut,
            delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
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
        <div className={theme ? "h-wrapper" : "h-wrapper-dark"}>
            <div className="load-container">
                <div className="load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <Container fluid data-barba="container" className="home">
                <Container fluid ref={(el) => (body = el)} className="head">
                    <Row>
                        <Col>
                            <Navs theme={theme} currentPage={currentPage} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="header">
                            <Header theme={theme} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
