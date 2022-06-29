import React from "react";
import {
  Typography,
  Pagination,
  Grid,
  Container,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from "@mui/material";

import { QuestionPreview, SearchBar, Loading } from "../components";
import { getQuestions, getQuestionsByQuery } from "../api";
import UserContext from "../context/user/context";
import { Link as RouterLink, useSearchParams } from "react-router-dom";

const Questions = () => {
  const [page, setPage] = React.useState(1);
  // const [author, setAuthor] = React.useState({});
  const handleChange = (event, pageNum) => {
    setPage(pageNum);
    window.scroll(0, 0);
  };
  const { dispatch, loading } = React.useContext(UserContext);

  const [questions, setQuestions] = React.useState([]);
  const [questionsCount, setQuestionsCount] = React.useState(0);
  let [searchParams, setSearchParams] = useSearchParams();
  let query =
    searchParams.get("query") === null ? "" : searchParams.get("query");
  const [searchQuery, setSearchQuery] = React.useState(query);

  React.useEffect(() => {
    // setSearchQuery(query);
    console.log(query);
    console.log(
      "🚀 ~ file: Questions.jsx ~ line 31 ~ React.useEffect ~ searchQuery",
      searchQuery
    );
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestionsByQuery(searchQuery, page)
      .then((response) => {
        console.log(
          "🚀 ~ file: Questions.jsx ~ line 16 ~ .then ~ response",
          response
        );
        setQuestions(response.data.questions);
        setQuestionsCount(response.data.count);
        // getUserById(response.data.author)
        //   .then((response) => {
        //     console.log(
        //       "🚀 ~ file: QuestionDetail.jsx ~ line 30 ~ .then ~ respon̥se",
        //       response
        //     );
        //     setAuthor(response.data);
        //   })
        //   .catch((error) => {
        // //     console.log(
        // //       "🚀 ~ file: QuestionDetail.jsx ~ line 35 ~ .then ~ error",
        // //       error
        // //     );
        //   });
        // setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        // }, 1000);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: Questions.jsx ~ line 20 ~ React.useEffect ~ error",
        // error
        // );
      });
  }, [dispatch, page]);

  const searchQuestions = async () => {
    setSearchParams({ query: searchQuery });
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestionsByQuery(searchQuery, page)
      .then((response) => {
        // console.log(
        //   "🚀 ~ file: Questions.jsx ~ line 69 ~ getQuestionsByQuery ~ response",
        //   response
        // );
        setQuestions(response.data.questions);
        setQuestionsCount(response.data.count);
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        // console.log(
        //   "🚀 ~ file: Questions.jsx ~ line 73 ~ getQuestionsByQuery ~ error",
        //   error
        // );
      });
  };

  if (loading) {
    return (
      <Loading />
      // <QuestionSkeleton />
    );
  }

  return (
    <>
      <Container maxWidth="md">
        <Grid
          item
          container
          spacing={2}
          direction={"column"}
          sx={{
            pt: { xs: "2rem", lg: "4rem" },
            pb: { xs: "2rem", lg: "4rem" },
          }}
        >
          <Grid item>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchQuestions={searchQuestions}
            />
          </Grid>
          {!loading
            ? questions.length === 0 && (
                <Box
                  sx={{
                    p: "2rem",
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" color={"secondary"}>
                    No Question(s) Found!
                  </Typography>
                  <Typography color={"text.secondary"} paragraph>
                    Try Searching Something Else.
                  </Typography>
                  <Typography align="center" variant="button" paragraph>
                    OR
                  </Typography>
                  <Button
                    variant="contained"
                    LinkComponent={RouterLink}
                    to="/ask-question"
                  >
                    Ask Your Question
                  </Button>
                </Box>
              )
            : null}
          {questionsCount > 0 && (
            <Grid
              container
              item
              spacing={1}
              display={"flex"}
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={"center"}
            >
              <Grid item>
                <Typography variant="subtitle1">
                  Found <b>{questionsCount}</b> Question(s)!
                </Typography>
              </Grid>
              <Grid item display={"flex"} alignItems={"center"}>
                <Typography mr={1} variant="body2">
                  {"Didn't find your question?"}
                </Typography>
                <Button
                  variant="contained"
                  LinkComponent={RouterLink}
                  to="/ask-question"
                >
                  Ask Your Question
                </Button>
              </Grid>
            </Grid>
          )}
          {
            // loading
            // ? Array(10)
            //     .fill()
            //     .map((item, index) => <QuestionSkeleton key={index} />)
            // :
            questions.map((question, index) => (
              <QuestionPreview key={question._id} data={question} />
            ))
          }
          <Grid item>
            {/* <Typography>Page: {page}</Typography> */}
            {questionsCount > 0 && (
              <Pagination
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                count={Math.ceil(questionsCount / 10)}
                page={page}
                onChange={handleChange}
                showFirstButton
                showLastButton
                size="small"
                variant="outlined"
                shape="circular"
                color="primary"
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Questions;
