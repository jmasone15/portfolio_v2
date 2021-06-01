import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Languages() {
    return (
        <div className="l-container">
            <div>
                <h1>Languages</h1>
                <h5 style={{ color: "#6ed3e7" }}>These are some of the languages I use in all of my projects</h5>
            </div>
            <Container className="justify-content-md-center" style={{ marginTop: "100px" }}>
                <Row>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-html5-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-css3-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-javascript-plain"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-mysql-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-github-original-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-express-original-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-nodejs-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-react-original-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-jquery-plain-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-react-original-wordmark"></i>
                    </Col>
                    <Col style={{ marginRight: "75px" }}>
                        <i class="devicon-react-original-wordmark"></i>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
