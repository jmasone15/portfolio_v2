import React, { useState } from "react";
import Router from "./Router";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import { AuthContextProvider } from "./utils/context/AuthContext";
import { UserContextProvider } from "./utils/context/UserContext";
axios.defaults.withCredentials = true;

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <div data-barba="container">
      <AuthContextProvider>
        <UserContextProvider>
          <Wrapper theme={theme} />
          <Router theme={theme} setTheme={setTheme} />
        </UserContextProvider>
      </AuthContextProvider >
    </div>
  );
}

export default App;
