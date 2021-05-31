import React from "react";
import Header from "../components/Header";
import Navs from "../components/Navs";
import Footer from "../components/Footer";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    return (
        <>
            <Navs />
            <div className="header">
                <Header />
            </div >
            <Footer />
        </>
    )
}
