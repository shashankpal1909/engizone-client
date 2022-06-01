import {
  CssBaseline,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import React from "react";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";

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
    <>
      <CssBaseline />
      <Grid
        alignContent={"center"}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
        sx={{ p: "1rem" }}
      >
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
          }}
        >
          <img
            src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            alt="about"
            height={250}
            style={{ borderRadius: "1rem" }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "inherit" },
          }}
        >
          <Typography variant="h4" align="left" color={"primary"}>
            About Us.
          </Typography>
          <Typography>Creating quality urban lifestyles, building stronger communities</Typography>
          <FeaturesList />
        </Grid>
      </Grid>
    </>
  );
};

export default About;
