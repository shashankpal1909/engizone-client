import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Fab,
} from "@mui/material";
import React from "react";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AboutImage from "../Assets/AboutImage.jpg";

function FeaturesList(params) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Feature #1" secondary="SubTitle" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Feature #2" secondary="SubTitle" />
      </ListItem>
    </List>
  );
}

const About = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      direction={{ xs: "column", md: "row" }}
      sx={{ pt: "1rem", pb: "1rem" }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
          About Us.
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: "1rem" }, pr: { xs: "1rem" } }}
          color={"text.secondary"}
          align="justify"
          paragraph
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          repellat excepturi ipsam tempore, quis delectus animi deserunt totam
          molestiae distinctio est, mollitia sunt, alias ut! Suscipit esse
          excepturi laudantium sequi?
        </Typography>
        <Fab color="primary" variant="extended">
          <ArrowForwardIosIcon sx={{ mr: 1 }} /> See More
        </Fab>
        {/* <FeaturesList /> */}
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
          src={AboutImage}
          alt="about"
          sx={{ width: { xs: "90vw", md: "500px" }, borderRadius: "1rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
