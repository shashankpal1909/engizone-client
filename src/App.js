import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar, Footer } from "./components";

import "./App.css";
import Home from "./pages/Home";

const themeOptions = createTheme({
  palette: {
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
      <NavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
