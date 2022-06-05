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
      spacing={2}
      direction={"column"}
      alignItems={"center"}
      sx={{
        pt: { xs: "2rem", md: "4rem" },
        pb: { xs: "2rem", md: "4rem" },
      }}
    >
      {/* <Grid item xs={10} sm={7}>
        <SearchBar />;
      </Grid> */}
      <Grid item container justifyContent="center">
        <Question />
      </Grid>
      <Grid item container justifyContent="center">
        <Question />
      </Grid>
      <Grid item container justifyContent="center">
        <Question />
      </Grid>
      <Grid xs={10} sm={7} md={6}>
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
          // elevation={2}
          // size={{ xs: "small", md: "large" }}
        />
      </Grid>
    </Grid>
  );
};

export default Questions;
