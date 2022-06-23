import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Avatar,
  Chip,
  Autocomplete,
} from "@mui/material";
import React from "react";
import TextEditor from "../components/TextEditor";
import HelpIcon from "@mui/icons-material/Help";
import EditIcon from "@mui/icons-material/Edit";

import { getAllTags, getQuestionById, updateQuestionById } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const EditQuestion = () => {
  const { id } = useParams();

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [availableTags, setAvailableTags] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    getQuestionById(id)
      .then((response) => {
        setTitle(response.data.question.title);
        setBody(response.data.question.text);
        setTags(response.data.question.tags);
        // console.log(
        // "🚀 ~ file: EditQuestion.jsx ~ line 28 ~ getQuestionById ~ response",
        // response
        // );
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: EditQuestion.jsx ~ line 31 ~ getQuestionById ~ error",
        // error
        // );
      });
    getAllTags()
      .then((response) => {
        console.log(
          "🚀 ~ file: AskQuestion.jsx ~ line 27 ~ getAllTags ~ response",
          response
        );
        setAvailableTags(response.data.tags);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: AskQuestion.jsx ~ line 30 ~ getAllTags ~ error",
          error
        );
      });
  }, []);

  const handleBodyChange = (event, editor) => {
    setBody(editor.getData());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateQuestionById(id, { title, text: body, tags })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: EditQuestion.jsx ~ line 53 ~ .then ~ response",
        // response
        // );

        navigate(`/questions/${response.data.question._id}`);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: EditQuestion.jsx ~ line 58 ~ handleSubmit ~ error",
        // error
        // );
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
              <EditIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography component="h1" align="center" variant="h5" paragraph>
              Edit Question - {id}
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
          <Autocomplete
            multiple
            id="tags-filled"
            options={availableTags}
            // defaultValue={[top100Films[13].title]}
            freeSolo
            value={tags}
            onChange={(event, newValue) => {
              if (newValue.length <= 5) setTags(newValue);
              console.log(newValue);
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  color="primary"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                helperText="Add up to 5 tag(s) to describe what your question is about"
                variant="outlined"
                label="Tags"
                placeholder="Choose or Add Tags"
              />
            )}
          />
          {/* <TextField
            variant="outlined"
            label="Tags"
            helperText="Add up to 5 tag to describe what your question is about"
            fullWidth
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          /> */}
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" fullWidth>
            Update Your Question
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditQuestion;
