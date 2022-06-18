import React from "react";
import { Typography, Pagination, Grid, Container } from "@mui/material";

import { QuestionPreview, SearchBar } from "../components";
import { getQuestions, getUserById } from "../api";
import UserContext from "../context/user/context";
import { Loading } from "../components/Loading";

const Questions = () => {
  const [page, setPage] = React.useState(1);
  // const [author, setAuthor] = React.useState({});
  const handleChange = (event, pageNum) => setPage(pageNum);
  const { dispatch, loading } = React.useContext(UserContext);

  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getQuestions()
      .then((response) => {
        console.log(
          "🚀 ~ file: Questions.jsx ~ line 16 ~ .then ~ response",
          response
        );
        setQuestions(response.data);
        // getUserById(response.data.author)
        //   .then((response) => {
        //     console.log(
        //       "🚀 ~ file: QuestionDetail.jsx ~ line 30 ~ .then ~ respon̥se",
        //       response
        //     );
        //     setAuthor(response.data);
        //   })
        //   .catch((error) => {
        //     console.log(
        //       "🚀 ~ file: QuestionDetail.jsx ~ line 35 ~ .then ~ error",
        //       error
        //     );
        //   });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Questions.jsx ~ line 20 ~ React.useEffect ~ error",
          error
        );
      });
  }, [dispatch]);

  const filterData = (query, data) => {
    if (!query) {
      return [];
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

  const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin",
  ];

  const [searchQuery, setSearchQuery] = React.useState("");
  const dataFiltered = filterData(searchQuery, data);

  if (loading) return <Loading />;

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
          />
          <Grid item container>
            {dataFiltered.map((d) => (
              <Grid item>{d}</Grid>
            ))}
          </Grid>
        </Grid>
        {questions.map((question, index) => (
          <QuestionPreview key={index} data={question} />
        ))}
        <Grid item>
          <Typography>Page: {page}</Typography>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            count={99}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
            size="small"
            variant="outlined"
            shape="circular"
            color="primary"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Questions;
