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
import moment from "moment";
import { Link as RouterLink } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Context from "../context/user/context";
import { getAvatarById, getQuestionsByAuthorId } from "../api";

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

const ListComponent = ({ data }) => {
  return (
    <List sx={{ bgcolor: "background.paper" }}>
      {data.map((item) => (
        <ListItem key={item._id} disablePadding>
          <ListItemButton component={RouterLink} to={`/questions/${item._id}`}>
            <ListItemAvatar>
              <Avatar>
                <LinkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={moment(item.createdAt).fromNow()}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const Profile = () => {
  const { user } = React.useContext(Context);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    if (user) {
      getQuestionsByAuthorId(user?._id, 5)
        .then((response) => {
          console.log(
            "🚀 ~ file: Profile.jsx ~ line 71 ~ getQuestionsByAuthorId ~ response",
            response
          );
          setQuestions(response.data.questions);
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: Profile.jsx ~ line 74 ~ getQuestionsByAuthorId ~ error",
            error
          );
        });
    }
  }, [user, user?._id]);

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
              src={user?.avatar}
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
          subheader={`Joined ${moment(user?.createdAt).fromNow()}`}
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
            <Grid item flex={"auto"}>
              <ListComponent data={questions} />
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
            <Grid item flex={"auto"}>
              <ListComponent data={[]} />
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
            <Grid item flex={"auto"}>
              <ListComponent data={[]} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
