import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar, Footer } from "./components";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Questions from "./pages/Questions";

const themeOptions = createTheme({
  palette: {
    mode: "light",
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Didact Gothic",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
