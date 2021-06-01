import React from 'react';
import Button from "react-bootstrap/Button";

export default function ProjectCard({ color, data }) {
    return (
        <>
            <div className="p-card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon" style={{ backgroundColor: color }}>
                            <i className="fa fa-linkedin-square" style={{ backgroundColor: color, position: "absolute", left: "130px" }} aria-hidden="true">
                                <h2 style={{ backgroundColor: color, color: "black" }}>{data.name}</h2>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="face face2" style={{ backgroundColor: "#8d99ae" }}>
                    <div className="content" style={{ backgroundColor: "#8d99ae" }}>
                        <p style={{ color: color, backgroundColor: "#8d99ae" }}>{data.description}</p>
                        <br />
                        <Button
                            target="_blank"
                            href={data.github}
                            style={{ backgroundColor: color, border: `1px solid ${color}`, marginRight: "10px", color: "black" }}
                        >Github
                        </Button>
                        <Button
                            target="_blank"
                            href={data.deploy}
                            style={{ backgroundColor: color, border: `1px solid ${color}`, color: "black" }}
                        >Deployed
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
