import React, { useState } from "react";
import Header from "./components/Header";
import "./style.css";

function App() {

  const [aniDone, setAniDone] = useState(false);

  return (
    <div className="App">
      <Header setAniDone={setAniDone} />
    </div >
  );
}

export default App;
