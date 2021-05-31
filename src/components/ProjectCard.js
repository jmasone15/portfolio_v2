import React from 'react';

export default function ProjectCard({ color }) {
    return (
        <>
            <div className="p-card">
                <div className="face face1">
                    <div className="content" style={{ backgroundColor: color }}>
                        <div className="icon" style={{ backgroundColor: color }}>
                            <i className="fa fa-linkedin-square" style={{ backgroundColor: color }} aria-hidden="true">
                                <h2 style={{ backgroundColor: color }}>Project Name</h2>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="face face2" style={{ backgroundColor: "#fffffc" }}>
                    <div className="content" style={{ backgroundColor: "#fffffc" }}>
                        <p style={{ color: color, backgroundColor: "#fffffc" }}>blah blah blah blah blah blah blah blah blah blah</p>
                        <br />
                        <button style={{ backgroundColor: color, color: "#fffffc" }}>Project buttons</button>
                        <button style={{ backgroundColor: color, color: "#fffffc" }}>Project buttons</button>
                        <button style={{ backgroundColor: color, color: "#fffffc" }}>Project buttons</button>
                    </div>
                </div>
            </div>
        </>
    )
}
