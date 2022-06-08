import { Container, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { Footer } from "../components";
import About from "../components/About";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <Container>
        <CssBaseline />
        <Grid
          container
          // spacing={{ xs: 2, md: 4 }}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            pt: { xs: "2rem", md: "4rem" },
            pb: { xs: "2rem", md: "4rem" },
            // pb: "4rem",
          }}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <HowItWorks />
          </Grid>
          <Grid item>
            <About />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
