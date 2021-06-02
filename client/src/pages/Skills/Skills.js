import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import AuthCard from '../../components/AuthCard';
import ThemeCard from '../../components/ThemeCard';
import "./skills.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Languages from '../../components/Languages';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Skills({ theme, setTheme }) {

    const history = useHistory();

    const changePage = (e, link) => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <div className="s-wrapper">
            <Container fluid>
                <Row>
                    <Col>
                        <Navs />
                    </Col>
                </Row>
                <Row>
                    <div className="s-header">
                        <h1 style={{ color: "white" }}>skills</h1>
                        <h5 style={{ color: "#64daf1" }}>This page showcases some of my skills in full stack development</h5>
                    </div>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <div className="s-container">
                                <AuthCard changePage={changePage} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="s-container">
                                <ThemeCard theme={theme} setTheme={setTheme} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="l-container">
                                <Languages />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
