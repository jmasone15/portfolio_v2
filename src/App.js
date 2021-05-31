import React from "react";
import Typist from 'react-typist';
import "./style.css";

function App() {
  return (
    <div className="App">
      <Typist cursor={{ show: false }}>
        <h1>Hello, my name is <u>Jordan Masone.</u></h1>
        <h3>I am a Full Stack Developer with a focus on the MERN stack.</h3>
        <h3>Make sure to check out my projects page to see my latest projects.</h3>
        <h3>Contact me for inquiries at: <a href="mailto:jordanmasone1@gmail.com?subject = Full Stack Developer Inquiry">jordanmasone1@gmail.com</a></h3>
      </Typist>
    </div >
  );
}

export default App;
