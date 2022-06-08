import React from "react";
import { Grid, Typography } from "@mui/material";
import { Question, Solution } from "../components";

const QuestionDetail = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        xs={11.5}
        sm={9}
        xl={5}
        spacing={3}
        direction={"column"}
        sx={{
          pt: "2rem",
          pb: "4rem",
        }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4" xs={6}>
              Question
            </Typography>
          </Grid>
          <Question />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4" xs={6}>
              Solutions ({3} Answers)
            </Typography>
          </Grid>
          <Solution />
          <Solution />
          <Solution />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionDetail;
