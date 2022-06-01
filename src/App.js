import React from "react";
import { NavBar, Footer } from "./components";

import "./App.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "5vw",
      }}
    >
      <NavBar />
      <div>
        <h1>Engi-Zone Client</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
