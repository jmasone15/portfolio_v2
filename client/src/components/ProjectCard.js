import React from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';

export default function ProjectCard({ color, data, num, theme }) {
    return (
        <Container>
            <div className="p-card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon" style={{ backgroundColor: color }}>
                            <i className="fa fa-linkedin-square" style={{ backgroundColor: color, position: "absolute", left: num }} aria-hidden="true">
                                <h2 style={{ backgroundColor: color, color: theme ? "black" : "white" }}>{data.name}</h2>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="face face2" style={theme ? { backgroundColor: "#8d99ae" } : { backgroundColor: "#bfc0c0" }}>
                    <div className="content" style={theme ? { backgroundColor: "#8d99ae" } : { backgroundColor: "#bfc0c0" }}>
                        <p style={{ color: color, backgroundColor: theme ? "#8d99ae" : "#bfc0c0" }}>{data.description}</p>
                        <br />
                        <Button
                            target="_blank"
                            href={data.github}
                            style={{ backgroundColor: color, border: `1px solid ${color}`, marginRight: "10px", color: theme ? "black" : "white" }}
                        >Github
                        </Button>
                        <Button
                            target="_blank"
                            href={data.deploy}
                            style={{ backgroundColor: color, border: `1px solid ${color}`, color: theme ? "black" : "white" }}
                        >Deployed
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
