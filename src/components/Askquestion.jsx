import {
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import TextEditor from "./TextEditor";

const Askquestion = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        //   spacing={{ xs: 2, md: 3 }}
        pt={2}
        pb={6}
        direction="column"
        position="relative"
        justifyContent="center"
        alignItem="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Ask a question
          </Typography>
        </Grid>
        <Grid
          container
          boxShadow={4}
          padding="15px"
          borderRadius="0.2rem"
          direction="column"
          marginBottom={2}
        >
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Title
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label=""
              helperText="Ask a genunine question and imagine you are asking a question to another person"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Body
            </Typography>
          </Grid>
          <TextEditor />
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Tags
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label=""
              helperText="Add up to 5 tag to describe what your question is about"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained">Post your question</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Askquestion;
