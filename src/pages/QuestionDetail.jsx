import React from "react";
import { Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import { AddSolution, Loading, Question, Solution } from "../components";
import { useParams } from "react-router-dom";

import { addSolution, getQuestionById, getUserById } from "../api";
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

  const handleSubmit = (event) => {
    event.preventDefault();

    addSolution({ questionId: question?._id, text: body })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: AskQuestion.jsx ~ line 29 ~ .then ~ response",
        // response
        // );
        setSolutions((prev) => prev.concat(response.data.solution));
        setShowAddAnswer(false);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: AskQuestion.jsx ~ line 32 ~ handleSubmit ~ error",
        // error
        // );
      });
  };

  React.useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestionById(id)
      .then((response) => {
        // console.log(
        // "🚀 ~ file: QuestionDetail.jsx ~ line 14 ~ getQuestionById ~ response",
        // response
        // );
        setQuestion(response.data.question);
        setSolutions(response.data.solutions);
        // console.log(
        // "🚀 ~ file: QuestionDetail.jsx ~ line 12 ~ QuestionDetail ~ data",
        // question
        // );
        getUserById(response.data.question.author)
          .then((response) => {
            // console.log(
            //   "🚀 ~ file: QuestionDetail.jsx ~ line 30 ~ .then ~ respon̥se",
            //   response
            // );
            setAuthor(response.data);
            setLoading(false);
            dispatch({ type: "SET_LOADING", payload: false });
            // setTimeout(() => {
            // }, 5000);
          })
          .catch((error) => {
            // console.log(
            // "🚀 ~ file: QuestionDetail.jsx ~ line 35 ~ .then ~ error",
            // error
            // );
          });
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: QuestionDetail.jsx ~ line 16 ~ getQuestionById ~ error",
        // error
        // );
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
              <Grid item>
                <Typography variant="h4" xs={6} sx={{ wordBreak: "break-all" }}>
                  Question - {id}
                </Typography>
              </Grid>
              {<Question data={question} author={author} />}
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
                  Solutions ({question?.solutions.length} Answers)
                </Typography>
              </Grid>
              {solutions.map((solution, index) => (
                <Solution solution={solution} key={index} />
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
            Add Your Solution
          </Button>
        </Container>
      )}
    </>
  );
};

export default QuestionDetail;
