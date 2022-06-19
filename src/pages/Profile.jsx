import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Context from "../context/user/context";
const StatsCard = () => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" align="center">
            99
          </Typography>
          <Typography variant="body1">Questions Asked</Typography>
        </CardContent>
      </Card>
    </>
  );
};

const ListComponent = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {[1, 1, 1, 1].map((_, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <LinkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lorem ipsum dolor sit amet nostrud no diam. Vero sanctus amet ea at diam aliquip et lorem vel duo eos nonumy. Eum lorem ad et magna kasd rebum kasd diam dolor elitr no et duis dignissim eum stet ut."
              secondary="June 8, 2022"
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const Profile = () => {
  const { user } = React.useContext(Context);

  return (
    <Container
      maxWidth="md"
      sx={{
        pt: { xs: "2rem", md: "4rem" },
        pb: { xs: "2rem", md: "4rem" },
      }}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
            />
          }
          action={
            <CardActions>
              <IconButton
                LinkComponent={RouterLink}
                to="/profile/edit"
                aria-label="edit profile"
              >
                <EditIcon />
              </IconButton>
            </CardActions>
          }
          title={
            user ? user?.firstName + " " + user?.lastName : "Name PlaceHolder"
          }
          subheader="Joined Yesterday"
          titleTypographyProps={{ variant: "h6", color: "secondary" }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5">Stats</Typography>
            </Grid>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              item
              justifyContent={"center"}
            >
              {[1, 1, 1, 1].map((_, index) => (
                <Grid key={index} item>
                  <StatsCard />
                </Grid>
              ))}
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography variant="h5">Questions</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
                  See All
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <ListComponent />
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography variant="h5">Answers</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
                  See All
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <ListComponent />
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography variant="h5">Bookmarks</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
                  See All
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <ListComponent />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
