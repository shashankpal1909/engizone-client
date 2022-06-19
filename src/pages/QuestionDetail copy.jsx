import React, { useState, useEffect } from "react";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Question, Solution } from "../components";
import API from "../axios";
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [solutions, setSolutions] = useState(null);
  const [loading, setLoading] = useState({ question: true, solutions: true });

  useEffect(() => {
    setLoading({ question: true, solutions: true });

    API.get(`problems/${id}`)
      .then((res) => {
        setQuestion(res.data);
        setLoading((load) => ({ ...load, question: false }));
      })
      .catch((error) => {
        console.log(error);
        setLoading((load) => ({ ...load, question: false }));
      });

    API.get(`solutions/?question=${id}`)
      .then((res) => {
        setSolutions(res.data);
        setLoading((load) => ({ ...load, solutions: false }));
      })
      .catch((error) => {
        console.log(error);
        setLoading((load) => ({ ...load, solutions: false }));
      });
  }, [id]);
  // console.log(question);
  // console.log(solutions);

  return (
    <Container maxWidth="md">
      <Grid
        container
        // xs={11.5}
        // sm={9}
        // xl={5}
        spacing={3}
        direction={"column"}
        sx={{
          pt: { xs: "2rem", md: "4rem" },
          pb: { xs: "2rem", md: "4rem" },
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
          {loading.question ? (
            <Question loading />
          ) : (
            <Question
              id={id}
              title={question.title}
              statement={question.statement}
              tags={question.tags}
              // loading
            />
          )}
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            {/* {loading.solutions ? ( */}
            {/* <Skeleton wdith={40} /> */}
            <Typography variant="h4" xs={6}>
              Solutions ({solutions ? solutions.length : "No"} Answers)
            </Typography>
          </Grid>
          {loading.solutions ? (
            <React.Fragment>
              <Solution loading />
              <Solution loading />
            </React.Fragment>
          ) : solutions ? (
            solutions.map((sol) => (
              <Solution
                key={sol.id}
                id={sol.id}
                solution={sol.solution}
                up_votes={sol.up_votes}
                down_votes={sol.down_votes}
                // loading
              />
            ))
          ) : (
            "Be the first one to solve"
          )}
          {/* <Solution loading /> */}
          {/* <Solution />
          <Solution /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestionDetail;
