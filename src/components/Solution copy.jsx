import React from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Button,
  Collapse,
  TextField,
  Divider,
  Skeleton,
} from "@mui/material";

import { Comment } from "../components";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HeaderImage from "../assets/HeaderImage.jpg";
import API from "../axios";

const CommentSection = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Solution = ({ id, solution, up_votes, down_votes, loading }) => {
  const [comments, setComments] = React.useState(null);
  const [fetching, setFetching] = React.useState(true);
  const [viewComments, setViewComments] = React.useState(false);

  React.useEffect(() => {
    setFetching(true);

    API.get(`comments/?solutions=${id}`)
      .then((res) => {
        setComments(res.data);
        console.log(comments);
        // setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        // setFetching(false);
      });
  }, [id]);

  const handleComments = () => {
    setViewComments(!viewComments);
  };
  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          sx={{ pb: 1 }}
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar sx={{ bgcolor: red[500] }} aria-label="" />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={15}
                width="30%"
                sx={{ mb: 0.5 }}
              />
            ) : (
              "Username"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={12} width="20%" />
            ) : (
              "Sep 14, 2016"
            )
          }
          // subheaderTypographyProps={{ variant: "caption" }}
        />
        <Divider />
        {/* {loading ? (
          <Skeleton
            animation="wave"
            height={100}
            sx={{ mb: 0.5 }}
            variant="rectangular"
          />
        ) : (
          <CardMedia component="img" image={HeaderImage} />
        )} */}
        <CardContent sx={{ pt: 1, pb: 1 }}>
          <Typography variant="body1" color="text.primary">
            {/* Ex sit culpa dolor ut. Est reprehenderit duis minim elit. Velit culpa qui reprehenderit
            occaecat ipsum eu eiusmod quis dolore tempor elit qui quis laborum. */}
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={100}
                  sx={{ mb: 0.5, borderRadius: 1 }}
                  variant="rectangular"
                />
                {Array(4)
                  .fill()
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      height={15}
                      sx={{ mb: 0.3 }}
                      variant="text"
                    />
                  ))}
              </React.Fragment>
            ) : (
              solution
            )}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container justifyContent="space-between" pl={1} pr={1}>
            <Grid item>
              {loading ? (
                <Skeleton animation="wave" width={70} vairant="rectangular" />
              ) : (
                <React.Fragment>
                  {up_votes}
                  <IconButton aria-label="upVote" sx={{ mr: 1 }}>
                    <ThumbUpIcon />
                  </IconButton>
                  {down_votes}
                  <IconButton aria-label="downVote">
                    <ThumbDownIcon />
                  </IconButton>
                </React.Fragment>
              )}
            </Grid>
            <Grid item>
              {loading ? (
                <Skeleton animation="wave" width={100} vairant="rectangular" />
              ) : (
                <React.Fragment>
                  {2} Comments
                  <CommentSection
                    expand={viewComments}
                    onClick={handleComments}
                    aria-expanded={viewComments}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </CommentSection>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={viewComments} timeout="auto" unmountOnExit>
          <Divider />
          <Typography variant="h6" fontWeight="bold" p={2} pb={0}>
            Comments
          </Typography>
          <Grid container direction="column" pl={1} pr={2} pt={0} spacing={1}>
            <Grid item>
              <CardActions sx={{ pr: 0 }}>
                <Avatar sx={{ bgcolor: red[500] }} />
                <TextField
                  multiline
                  size="small"
                  variant="filled"
                  placeholder="Your Thoughts"
                  sx={{ width: "100%", mr: 1 }}
                />
                <Button variant="contained" color="primary">
                  Post
                </Button>
                <Button variant="outlined" color="primary">
                  Cancel
                </Button>
              </CardActions>
            </Grid>
            {fetching
              ? Array(2)
                  .fill()
                  .map((item, index) => <Comment key={index} parent loading />)
              : comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    parent={comment.replies.length}
                    comment={comment.comment}
                    replies={comment.replies}
                    // loading
                  />
                ))}
            {/* <Comment parent loading />
            <Comment parent /> */}
          </Grid>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Solution;
