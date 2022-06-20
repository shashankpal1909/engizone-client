import React from "react";
import { Link as RouterLink } from "react-router-dom";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Box, Typography, Grid, Fab } from "@mui/material";

import HeaderImage from "../assets/HeaderImage.jpg";

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
        <Typography variant="h4" color="secondary" fontWeight="500" paragraph>
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
          answer instantly. We want to connect people who wants to share their
          knowledge in effective way to the people who need it.
        </Typography>
        <div>
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
