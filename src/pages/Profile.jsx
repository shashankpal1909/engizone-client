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
import { Link as RouterLink, useParams } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Context from "../context/user/context";
import {
  getBookmarkedQuestionsByUserId,
  getQuestionsByAuthorId,
  getUserById,
} from "../api";
import UserContext from "../context/user/context";
import { Loading } from "../components";

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
  const { id } = useParams();
  const [currentUser, setCurrentUser] = React.useState({});
  const [questions, setQuestions] = React.useState([]);
  const [bookmarkedQuestions, setBookmarkedQuestions] = React.useState([]);
  const { user, loading, dispatch } = React.useContext(UserContext);

  React.useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getUserById(id)
      .then((response) => {
        setCurrentUser(response.data.user);
        return getQuestionsByAuthorId(id, 5);
      })
      .then((response) => {
        setQuestions(response.data.questions);
        return getBookmarkedQuestionsByUserId(id, 5);
      })
      .then((response) => {
        setBookmarkedQuestions(response.data.questions);
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Profile.jsx ~ line 75 ~ getUserById ~ error",
          error
        );
      });
  }, []);

  if (loading) return <Loading />;

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
              src={`data:image/gif;base64,${currentUser?.avatar}`}
              sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
            />
          }
          action={
            user?._id === id && (
              <CardActions>
                <IconButton
                  LinkComponent={RouterLink}
                  to={`/profile/${id}/edit`}
                  aria-label="edit profile"
                >
                  <EditIcon />
                </IconButton>
              </CardActions>
            )
          }
          title={
            currentUser
              ? currentUser?.firstName + " " + currentUser?.lastName
              : "Name PlaceHolder"
          }
          subheader={`Joined ${moment(currentUser?.createdAt).fromNow()}`}
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
                <Typography variant="h5">Asked Question(s)</Typography>
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
                <Typography variant="h5">Bookmarked Question(s)</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
                  See All
                </Button>
              </Grid>
            </Grid>
            <Grid item flex={"auto"}>
              <ListComponent data={bookmarkedQuestions} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
