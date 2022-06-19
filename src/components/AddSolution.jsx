import React from "react";
import { Button, Grid, Typography, Container } from "@mui/material";

import TextEditor from "../components/TextEditor";

const AddSolution = ({ data, handleChange, handleSubmit }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: "1rem",
        pb: { xs: "2rem", md: "4rem" },
      }}
    >
      <Grid
        component="form"
        container
        direction="column"
        position="relative"
        justifyContent="center"
        onSubmit={handleSubmit}
      >
        <Grid item container justifyContent={"center"} direction="column">
          <Grid item>
            <Typography component="h1" variant="h5" gutterBottom>
              Your Solution
            </Typography>
          </Grid>
        </Grid>
        <TextEditor data={data} handleChange={handleChange} />
        <Grid item>
          <Button type="submit" variant="contained" fullWidth>
            Post your solution
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddSolution;
