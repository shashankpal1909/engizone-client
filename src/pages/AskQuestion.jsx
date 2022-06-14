import {
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  Container,
  Fab,
  Avatar,
} from "@mui/material";
import React from "react";
import TextEditor from "../components/TextEditor";
import HelpIcon from "@mui/icons-material/Help";

const AskQuestion = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: { xs: "2rem", md: "4rem" },
        pb: { xs: "2rem", md: "4rem" },
      }}
    >
      <Grid
        container
        // spacing={2}
        //   spacing={{ xs: 2, md: 3 }}
        // pt={2}
        // pb={6}
        direction="column"
        position="relative"
        justifyContent="center"
        // alignItems="center"
      >
        <Grid item container justifyContent={"center"} direction="column">
          <Grid item display={"flex"} justifyContent="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HelpIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography component="h1" align="center" variant="h5" paragraph>
              Ask New Question
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid
          container
          // boxShadow={4}
          // padding="15px"
          borderRadius="0.2rem"
          direction="column"
          marginBottom={2}
        > */}
        {/* <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Title
            </Typography>
          </Grid> */}
        <Grid item pb={2}>
          <TextField
            variant="outlined"
            label="Title"
            helperText="Ask a genuine question and imagine you are asking a question to another person"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Describe Your Question
          </Typography>
        </Grid>
        <TextEditor />
        {/* <Grid item>
        </Grid> */}
        {/* <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Tags
            </Typography>
          </Grid> */}
        <Grid item pt={2} pb={2}>
          <TextField
            variant="outlined"
            label="Tags"
            helperText="Add up to 5 tag to describe what your question is about"
            fullWidth
          />
        </Grid>
        <Grid item>
          {/* <Fab color="primary" variant="extended">
            <SendIcon sx={{ mr: 1 }} /> Post your question
          </Fab> */}
          <Button variant="contained" fullWidth>
            Post your question
          </Button>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Container>
  );
};

export default AskQuestion;
