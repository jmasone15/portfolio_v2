import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./utils/context/AuthContext";
import { UserContextProvider } from "./utils/context/UserContext";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div data-barba="container">
      <AuthContextProvider>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </AuthContextProvider >
    </div>
  );
}

export default App;
