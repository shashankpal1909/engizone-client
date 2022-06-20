import React from "react";
import { Typography, Pagination, Grid, Container, Box } from "@mui/material";

import { QuestionPreview, SearchBar, Loading } from "../components";
import { getQuestions, getQuestionsByQuery } from "../api";
import UserContext from "../context/user/context";
import { useSearchParams } from "react-router-dom";

const Questions = () => {
  const [page, setPage] = React.useState(1);
  // const [author, setAuthor] = React.useState({});
  const handleChange = (event, pageNum) => {
    setPage(pageNum);
    window.scroll(0, 0);
  };
  const { dispatch, loading } = React.useContext(UserContext);

  let [searchParams, setSearchParams] = useSearchParams();

  const [questions, setQuestions] = React.useState([]);
  const [questionsCount, setQuestionsCount] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    setSearchQuery(
      searchParams.get("query") === null ? "" : searchParams.get("query")
    );
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestionsByQuery(searchQuery, page)
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Questions.jsx ~ line 16 ~ .then ~ response",
        // response
        // );
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
        setTimeout(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        }, 10000);
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
        {!loading && questions.length === 0 && (
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
            <Typography color={"text.secondary"}>
              Try Searching Something Else.
            </Typography>
          </Box>
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
  );
};

export default Questions;
