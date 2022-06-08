import { React, useState } from "react";
import { Typography, Pagination, Grid } from "@mui/material";
import { QuestionPreview, SearchBar } from "../components";

const Questions = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, pageNum) => setPage(pageNum);

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
    <Grid container justifyContent="center">
      <Grid
        item
        container
        xs={11.5}
        sm={8}
        xl={5}
        spacing={2}
        direction={"column"}
        // alignItems="flex-end"
        sx={{
          pt: { xs: "2rem", md: "4rem" },
          pb: { xs: "2rem", md: "4rem" },
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
        <QuestionPreview />
        <QuestionPreview />
        <QuestionPreview />
        <Grid item>
          <Typography>Page: {page}</Typography>
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
            size="small"
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Questions;
