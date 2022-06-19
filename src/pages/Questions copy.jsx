import React, { useEffect, useState } from "react";
import { Typography, Pagination, Grid, Container } from "@mui/material";
import { QuestionPreview, SearchBar } from "../components";
import API from "../axios";

const Questions = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    API.get(`problems/?page=${page}`)
      .then((res) => {
        console.log(res);
        setQuestions(res.data.questions);
        setCount(res.data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);
  // useEffect(() => {
  //   setLoading(true);
  //   API.get("problems/?page=" + page)
  //     .then((res) => {
  //       console.log(res);
  //       setQuestions(res.data.result);
  //       setCount(res.data.total_pages);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, [page]);

  // const [questions, setQuestions] = useState(null);
  // const [count, setCount] = useState(1);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   API.get(`problems/?page=${page}&size=${2}`)
  //     .then((res) => {
  //       setQuestions(res.data.result);
  //       setCount(res.data.count);
  //     })
  //     .catch((error) => console.log(error));
  // }, [page]);

  console.log(questions);

  // const handleChange = (pageNum) => setPage(pageNum);

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

  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <Container maxWidth="md">
      <Grid
        item
        container
        // xs={11.5}
        // sm={8}
        // xl={5}
        spacing={2}
        direction={"column"}
        // alignItems="flex-end"
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

        {loading ? (
          <React.Fragment>
            <QuestionPreview loading />
            <QuestionPreview loading />
            {/* <QuestionPreview loading /> */}
          </React.Fragment>
        ) : questions ? (
          questions.map((question) => (
            <QuestionPreview
              key={question.id}
              id={question.id}
              title={question.title}
              statement={question.statement}
              tags={question.tags}
              // loading
            />
          ))
        ) : (
          "No Questions Found"
        )}

        {}

        <Grid item>
          <Typography>Page: {page}</Typography>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            count={count}
            page={page}
            onChange={(event, pageNum) => {
              console.log(event);
              window.scroll(0, 0);
              setPage(pageNum);
            }}
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
