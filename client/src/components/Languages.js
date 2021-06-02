import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Languages() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="l-body">
                        <h1 style={{ color: "white" }}>Languages and Technologies</h1>
                        <h5>These are some of the languages and technologies I use in all of my projects.</h5>
                        <h5> I make sure to stay up to date with the latest advancements in web devevlopment technologies.</h5>
                    </div>
                </Col>
            </Row>
            <Row className="tech-row-first">
                <Col>
                    <i class="devicon-html5-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-css3-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-javascript-plain"></i>
                </Col>
                <Col>
                    <i class="devicon-mysql-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-mongodb-plain-wordmark"></i>
                </Col>
            </Row>
            <Row className="tech-row">
                <Col>
                    <i class="devicon-bootstrap-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-python-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-materialui-plain"></i>
                </Col>
                <Col>
                    <i class="devicon-php-plain"></i>
                </Col>
                <Col>
                    <i class="devicon-handlebars-plain-wordmark"></i>
                </Col>
            </Row>
            <Row className="tech-row-last">
                <Col>
                    <i class="devicon-express-original-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-nodejs-plain-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-react-original-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-github-original-wordmark"></i>
                </Col>
                <Col>
                    <i class="devicon-jquery-plain-wordmark"></i>
                </Col>
            </Row>
        </Container>
    )
}
