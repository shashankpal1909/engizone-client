import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, Questions, QuestionDetail, SignIn, SignUp } from "./pages";
import "./App.css";

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
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/questions" element={<Questions />} />
          <Route path={`/questions/${1}`} element={<QuestionDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
