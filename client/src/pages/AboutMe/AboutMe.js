import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import "./aboutme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe({ theme, currentPage, setCurrentPage }) {

    useEffect(() => {
        setCurrentPage("aboutme")
    });


    return (
        <div className={theme ? "a-wrapper" : "a-wrapper-dark"}>
            <Container fluid>
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
            <Footer theme={theme} />
        </div>
    )
}
