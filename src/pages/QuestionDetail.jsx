import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { AddSolution, Loading, Question, Solution } from "../components";
import { useParams } from "react-router-dom";

import { addSolution, deleteSolutionById, getQuestionById } from "../api";
import UserContext from "../context/user/context";

const QuestionDetail = () => {
  const { id } = useParams();

  const [question, setQuestion] = React.useState({});
  const [solutions, setSolutions] = React.useState([]);
  const [author, setAuthor] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { dispatch } = React.useContext(UserContext);
  const [body, setBody] = React.useState("");
  const [showAddAnswer, setShowAddAnswer] = React.useState(false);

  const handleBodyChange = (event, editor) => {
    setBody(editor.getData());
  };

  const handleDeleteSolution = (id) => {
    deleteSolutionById(id, { questionId: question._id })
      .then((response) => {
        setSolutions((prev) => prev.filter((solution) => solution._id !== id));
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: QuestionDetail.jsx ~ line 30 ~ deleteSolutionById ~ error",
          error
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addSolution({ questionId: question?._id, text: body })
      .then((response) => {
        setSolutions((prev) => prev.concat(response.data.solution));
        setShowAddAnswer(false);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: AskQuestion.jsx ~ line 32 ~ handleSubmit ~ error",
          error
        );
      });
  };

  React.useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestionById(id)
      .then((response) => {
        setQuestion(response.data.question);
        setSolutions(response.data.question.solutions);
        setLoading(false);
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: QuestionDetail.jsx ~ line 16 ~ getQuestionById ~ error",
          error
        );
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {
        // loading ? (
        //   <Loading />
        // ) :
        <Container
          maxWidth="md"
          sx={{
            pt: { xs: "2rem", md: "4rem" },
            // pb: { xs: "2rem", md: "4rem" },
          }}
        >
          <Grid container spacing={3} direction={"column"}>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              spacing={1}
            >
              {/* <Grid item>
                <Typography variant="h4" xs={6} sx={{ wordBreak: "break-all" }}>
                  Question - {id}
                </Typography>
              </Grid> */}
              {<Question data={question} author={question.author} />}
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h5" xs={6}>
                  {solutions?.length > 0 &&
                    `${solutions?.length} Answer(s) Available`}
                </Typography>
              </Grid>
              {!loading && solutions?.length === 0 && (
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" color={"secondary"} pt={2}>
                    No Answer(s) Available!
                  </Typography>
                  <Typography color={"text.secondary"} paragraph>
                    Be the first one to answer.
                  </Typography>
                </Grid>
              )}
              {solutions?.map((solution, index) => (
                <Solution
                  solution={solution}
                  key={index}
                  handleDelete={handleDeleteSolution}
                />
              ))}
            </Grid>
          </Grid>
        </Container>
      }
      {showAddAnswer ? (
        <AddSolution
          body={body}
          handleChange={handleBodyChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Container
          maxWidth="md"
          sx={{
            pt: "1rem",
            pb: { xs: "2rem", md: "4rem" },
          }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={() => setShowAddAnswer(true)}
          >
            Add Your Answer
          </Button>
        </Container>
      )}
    </>
  );
};

export default QuestionDetail;
