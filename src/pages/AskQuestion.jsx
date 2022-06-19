import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import React from "react";
import TextEditor from "../components/TextEditor";
import HelpIcon from "@mui/icons-material/Help";

import { addQuestion } from "../api";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [tags, setTags] = React.useState("");

  const navigate = useNavigate();

  const handleBodyChange = (event, editor) => {
    setBody(editor.getData());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addQuestion({ title, text: body, tags: tags.split(",") })
      .then((response) => {
        console.log(
          "🚀 ~ file: AskQuestion.jsx ~ line 29 ~ .then ~ response",
          response
        );
        navigate(`/questions/${response.data.question._id}`);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: AskQuestion.jsx ~ line 32 ~ handleSubmit ~ error",
          error
        );
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        pt: { xs: "2rem", md: "4rem" },
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
        <Grid item pb={2}>
          <TextField
            variant="outlined"
            label="Title"
            helperText="Ask a genuine question and imagine you are asking a question to another person"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Describe Your Question
          </Typography>
        </Grid>
        <TextEditor data={body} handleChange={handleBodyChange} />
        <Grid item pt={2} pb={2}>
          <TextField
            variant="outlined"
            label="Tags"
            helperText="Add up to 5 tag to describe what your question is about"
            fullWidth
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" fullWidth>
            Post your question
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AskQuestion;
