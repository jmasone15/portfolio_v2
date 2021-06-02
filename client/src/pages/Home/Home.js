import React from "react";
import Header from "../../components/Header";
import Navs from "../../components/Navs";
import Footer from "../../components/Footer";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Home({ theme }) {

    return (
        <div className={theme ? "h-wrapper" : "h-wrapper-dark"}>
            <Container fluid>
                <Row>
                    <Col>
                        <Navs theme={theme} />
                    </Col>
                </Row>
                <Row>
                    <Col className="header">
                        <Header theme={theme} />
                    </Col>
                </Row>
            </Container>
            <Footer theme={theme} />
        </div>
    )
}
