import React from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const Resources = () => {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        pt: { xs: "2rem", md: "4rem" },
        pb: { xs: "2rem", md: "4rem" },
      }}
    >
      <Grid item container justifyContent={"center"} direction="column">
        <Grid item display={"flex"} justifyContent="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LibraryBooksIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography component="h1" align="center" variant="h5" paragraph>
            Resources
          </Typography>
        </Grid>
        <Grid item>
          <Typography align={"center"} variant={"subtitle1"}>
            Resources will be added soon!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
