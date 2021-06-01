import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./utils/context/AuthContext";
import { UserContextProvider } from "./utils/context/UserContext";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </AuthContextProvider >
  );
}

export default App;
