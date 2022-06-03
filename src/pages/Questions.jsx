import { React, useState } from "react";
import { Typography, Pagination, Grid } from "@mui/material";
import { Question } from "../components";

const Questions = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, pageNum) => setPage(pageNum);
  return (
    <Grid
      item
      container
      direction="row"
      spacing={2}
      justifyContent="center"
      // alignItems="center"
    >
      <Grid item xs={10} sm={7}>
        {/* <SearchBar />; */}
      </Grid>
      <Grid item xs={10} sm={7} container direction="column" spacing={2}>
        <Question />
        <Question />
        <Question />
      </Grid>
      <Grid item xs={10} sm={7}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Questions;
