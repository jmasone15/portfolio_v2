import React from "react";
import Header from "../components/Header";
import Navs from "../components/Navs";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
            <Navs />
            <div className="App">
                <Header />
            </div >
            <Footer />
        </>
    )
}
