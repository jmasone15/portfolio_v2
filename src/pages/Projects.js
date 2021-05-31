import React from 'react';
import Footer from '../components/Footer';
import Navs from "../components/Navs";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projects() {
    return (
        <>
            <Navs />
            <div className="p-header">
                <h1>projects</h1>
            </div>
            <div className="p-body">
                <h5>blah blah blah blah blah blah blah blah blah blah blah blah</h5>
            </div>
            <div className="p-container">
                <div className="container">
                    <div className="p-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-linkedin-square" style={{ backgroundColor: "#e07768" }} aria-hidden="true">
                                        <h2 style={{ backgroundColor: "#e07768" }}>Project Name</h2>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content" style={{ backgroundColor: "#dee2ff" }}>
                                <p style={{ backgroundColor: "#dee2ff" }}>blah blah blah blah blah blah blah blah blah blah</p>
                                <br />
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-linkedin-square" style={{ backgroundColor: "#6eadd4" }} aria-hidden="true">
                                        <h2 style={{ backgroundColor: "#6eadd4" }}>Project Name</h2>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content" style={{ backgroundColor: "#dee2ff" }}>
                                <p style={{ backgroundColor: "#dee2ff" }}>blah blah blah blah blah blah blah blah blah blah</p>
                                <br />
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-linkedin-square" style={{ backgroundColor: "#4aada9" }} aria-hidden="true">
                                        <h2 style={{ backgroundColor: "#4aada9" }}>Project Name</h2>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content" style={{ backgroundColor: "#dee2ff" }}>
                                <p style={{ backgroundColor: "#dee2ff" }}>blah blah blah blah blah blah blah blah blah blah</p>
                                <br />
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                                <button>Project buttons</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
