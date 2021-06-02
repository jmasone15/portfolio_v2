import React from "react";
import Header from "../../components/Header";
import Navs from "../../components/Navs";
import Footer from "../../components/Footer";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Home() {

    return (
        <div className="h-wrapper">
            <Container fluid>
                <Row>
                    <Col>
                        <Navs />
                    </Col>
                </Row>
                <Row>
                    <Col className="header">
                        <Header />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
