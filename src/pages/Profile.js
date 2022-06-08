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
import React from "react";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";

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
      <ListItem disablePadding>
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
      <ListItem disablePadding>
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
      <ListItem disablePadding>
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
      <ListItem disablePadding>
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
    </List>
  );
};

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }} />}
          action={
            <CardActions>
              <IconButton aria-label="edit profile">
                <EditIcon />
              </IconButton>
            </CardActions>
          }
          title="Shashank"
          subheader="Joined Yesterday"
          titleTypographyProps={{ variant: "h6", color: "secondary" }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5">Stats</Typography>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 2 }} item justifyContent={"center"}>
              <Grid item>
                <StatsCard />
              </Grid>
              <Grid item>
                <StatsCard />
              </Grid>
              <Grid item>
                <StatsCard />
              </Grid>
              <Grid item>
                <StatsCard />
              </Grid>
            </Grid>
            <Grid container item justifyContent={"space-between"}>
              <Grid item>
                <Typography variant="h5">Questions</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined">See All</Button>
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
                <Button variant="outlined">See All</Button>
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
