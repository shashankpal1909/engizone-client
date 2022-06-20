import React from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  TextField,
  Divider,
  InputAdornment,
  Fab,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import moment from "moment";
import parse from "html-react-parser";

import { Comment } from "../components";
import { addComment, getCommentById, getUserById, voteSolution } from "../api";
import UserContext from "../context/user/context";
import SolutionSkeleton from "./SolutionSkeleton";

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

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "6px",
    "& fieldset": {
      borderRadius: "10rem",
    },
  },
});

const Solution = ({ solution }) => {
  const [author, setAuthor] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");
  const [currentSolution, setCurrentSolution] = React.useState(solution);
  const [showComments, setShowComments] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    // setSolution(data);
    getUserById(currentSolution.author)
      .then((response) => {
        // console.log(
        // "🚀 ~ file: QuestionPreview.jsx ~ line 39 ~ .then ~ response",
        // response
        // );
        setAuthor(response.data);

        currentSolution.comments.forEach(async (id) => {
          await getCommentById(id).then((response) => {
            // console.log(
            // "🚀 ~ file: Solution.jsx ~ line 72 ~ getCommentById ~ response",
            // response
            // );
            setComments((prev) => [response.data].concat(prev));
          });
        });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: QuestionPreview.jsx ~ line 43 ~ React.useEffect ~ error",
        // error
        // );
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    addComment({ solutionId: currentSolution._id, text: commentText })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 89 ~ addComment ~ response",
        // response
        // );
        setComments((prev) => [response.data.comment].concat(prev));
        setCommentText("");
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 97 ~ handleSubmit ~ error",
        // error
        // );
      });
  };

  const handleVote = async (type) => {
    voteSolution(currentSolution._id, { type })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 107 ~ voteSolution ~ response",
        // response
        // );
        setCurrentSolution(response.data);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 110 ~ voteSolution ~ error",
        // error
        // );
      });
  };

  if (loading) {
    return <SolutionSkeleton />;
  }

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${author?.firstName} ${author?.lastName}`}
          subheader={moment(currentSolution?.createdAt).fromNow()}
        />
        <Divider />
        {/* <CardMedia component="img" image={HeaderImage} /> */}
        <CardContent>
          {parse(currentSolution?.text)}
          {/* <Typography variant="body1" color="text.primary">
          </Typography> */}
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <Grid container justifyContent="space-between">
            <Grid item>
              <IconButton aria-label="upVote" onClick={() => handleVote(1)}>
                {currentSolution?.upVotes.find((id) => id === user?._id) ? (
                  <ThumbUpIcon color="primary" />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}
              </IconButton>
              {currentSolution?.upVotes.length}
              <IconButton aria-label="downVote" onClick={() => handleVote(-1)}>
                {currentSolution?.downVotes.find((id) => id === user?._id) ? (
                  <ThumbDownIcon color="primary" />
                ) : (
                  <ThumbDownAltOutlinedIcon />
                )}
              </IconButton>
              {currentSolution?.downVotes.length}
            </Grid>
            <Grid item>
              {currentSolution?.comments.length} Comments
              <CommentSection
                expand={showComments}
                onClick={() => setShowComments((prev) => !prev)}
                aria-expanded={showComments}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </CommentSection>
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={showComments} timeout="auto" unmountOnExit>
          <Divider />
          <Typography variant="h6" fontWeight="bold" pl={2} pt={1} pr={2}>
            Comments
          </Typography>
          <Grid container direction="column" padding={1} spacing={1}>
            <Grid item>
              <CardActions>
                <Avatar sx={{ bgcolor: red[500] }} />
                <RoundedTextField
                  size="small"
                  variant="outlined"
                  placeholder="Your Thoughts"
                  fullWidth
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setCommentText("")}
                          size="medium"
                          sx={{ mr: "1px" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleSubmit}
                          color="primary"
                          size="medium"
                          type="submit"
                        >
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardActions>
            </Grid>
            {comments.map((comment, _index) => (
              <Comment parent key={comment?._id} comment={comment} />
            ))}
          </Grid>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Solution;
