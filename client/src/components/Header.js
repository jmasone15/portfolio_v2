import React from "react";
import Typist from 'react-typist';

export default function Header() {

    const fadeIn = () => {
        setInterval(show, 100);
    };

    const show = () => {
        const target = document.getElementById("fade");
        if (target) {
            let opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));

            if (opacity < 1) {
                opacity += 0.1;
                target.style.opacity = opacity
            } else {
                clearInterval(0);
            }
        }
    }

    return (
        <div>
            <Typist cursor={{ show: false }} onTypingDone={() => fadeIn()}>
                <h1>Hello, my name is <span style={{ color: "white" }}>Jordan Masone</span></h1>
                <Typist.Delay ms={500} />
                <h1>
                    I am a <a style={{ color: "white" }} href="https://github.com/jmasone15">Front End Developer</a>
                    <Typist.Backspace count={20} delay={500} />
                    <Typist.Delay ms={500} /> <a style={{ color: "white" }} href="https://github.com/jmasone15">Back End Developer</a>
                    <Typist.Backspace count={19} delay={500} />
                    <Typist.Delay ms={500} /> <a style={{ color: "white" }} href="https://github.com/jmasone15">Full Stack Developer</a>
                </h1>
            </Typist>
            <div id="fade" className="fade">
                <h3>Check out my <a style={{ color: "white" }} href="/projects">projects page</a> to see my latest projects.</h3>
                <h3>Contact me for inquiries at: <a style={{ color: "white" }} target="_blank" rel="noreferrer" href="mailto:jordanmasone1@gmail.com?subject = Full Stack Developer Inquiry">jordanmasone1@gmail.com</a></h3>
            </div>
        </div>
    )
}
