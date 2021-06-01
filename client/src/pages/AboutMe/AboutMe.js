import React from 'react';
import Footer from '../../components/Footer';
import Navs from "../../components/Navs";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
    return (
        <>
            <Navs />
            <div className="p-header">
                <h1>about me</h1>
            </div>
            <div className="p-body">
                <h5>blah blah blah blah blah blah blah blah blah blah blah blah</h5>
            </div>
            <Footer />
        </>
    )
}
