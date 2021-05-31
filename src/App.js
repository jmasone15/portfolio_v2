import React, { useState } from "react";
import Header from "./components/Header";
import Navs from "./components/Navs";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [aniDone, setAniDone] = useState(false);

  return (
    <>
      <Navs />
      <div className="App">
        <Header setAniDone={setAniDone} />
      </div >
    </>
  );
}

export default App;
