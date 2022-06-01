import { Grid } from "@mui/material";
import React from "react";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <HowItWorks />
        </Grid>
        <Grid item>
          <About />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
