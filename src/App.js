import React from "react";

import "./App.css";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";

const App = () => {
  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",        
      //   fontSize: "5vw",
      //   overflow: "scroll"
      // }}
    >
      <Header /> 
      <ContactUs /> 
    </div>
  );
};

export default App;
