import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import LinearProgress from "@mui/material/LinearProgress";

// import Questions from "./pages/Questions";
import { NavBar, Footer } from "./components";
import {
  Home,
  Questions,
  AskQuestion,
  QuestionDetail,
  SignIn,
  SignUp,
  Contact,
  Profile,
  EditProfile,
  Resources,
} from "./pages";

import "./App.css";

import Context from "./context/user/context";
import EditQuestion from "./pages/EditQuestion";

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
    // fontFamily: "Montserrat",
    // fontFamily: "Raleway",
    // fontFamily: "IBM Plex Sans",
    fontFamily: "Didact Gothic",
    // fontFamily: "Poppins",
  },
});

const ScrollTop = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const LinearIndeterminate = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="secondary" />
    </Box>
  );
};

const App = () => {
  const { loading } = React.useContext(Context);

  return (
    <ThemeProvider theme={themeOptions}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NavBar />
          {loading && <LinearIndeterminate />}
          <Toolbar
            id="back-to-top-anchor"
            sx={{ minHeight: "0px !important" }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/questions" element={<Questions />} />
            <Route path={`/questions/:id`} element={<QuestionDetail />} />
            <Route path={`/questions/:id/edit`} element={<EditQuestion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <Footer />
          <ScrollTop>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
