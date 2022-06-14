import { Box, Button, Typography, IconButton, Grid, Fab } from "@mui/material";
import HeaderImage from "../assets/HeaderImage.jpg";
import React from "react";
// import { PhotoCamera } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
const Header = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      direction={{ xs: "column", md: "row" }}
      sx={{ pt: "1rem", pb: "1rem" }}
    >
      <Grid
        item
        fontWeight="900"
        justifyContent="space-between"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          pb: { xs: "1rem", md: 0 },
        }}
        xs={4}
      >
        <Typography
          variant="h4"
          color="secondary"
          // sx={{ maxWidth: "500px" }}
          fontWeight="500"
          paragraph
        >
          Find best answer for your questions
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: "1rem" }, pr: { xs: "1rem" } }}
          align="justify"
          color={"text.secondary"}
          paragraph
        >
          EngiZone is a platform where you can post your question and get best
          answer instantly. We want to connect peple who wants to share their
          knowledge in effective way to the people who need it.
        </Typography>
        <div>
          {/* <Button variant="contained">Ask Question</Button>
          <IconButton color="primary">
            <PhotoCamera />
          </IconButton> */}
          <Fab
            color="primary"
            LinkComponent={RouterLink}
            to="/ask-question"
            variant="extended"
          >
            <QuestionAnswerIcon sx={{ mr: 1 }} /> Ask Question
          </Fab>
        </div>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={6}
      >
        <Box
          component={"img"}
          src={HeaderImage}
          alt="HeaderImage"
          sx={{ width: { xs: "90vw", md: "500px" }, borderRadius: "1rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
