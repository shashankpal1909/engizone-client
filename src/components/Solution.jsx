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
  Fab,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import { Comment } from "../components";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HeaderImage from "../assets/HeaderImage.jpg";
import { addComment, getCommentById, getUserById, voteSolution } from "../api";
import moment from "moment";
import parse from "html-react-parser";
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
    // padding: "0 0.5rem",
    "& fieldset": {
      borderRadius: "10rem",
    },
  },
});

const Solution = ({ solution }) => {
  const [currentSolution, setCurrentSolution] = React.useState(solution);

  const [showComments, setShowComments] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const [commentText, setCommentText] = React.useState("");

  const [author, setAuthor] = React.useState({});

  React.useEffect(() => {
    // setSolution(data);
    getUserById(currentSolution.author)
      .then((response) => {
        console.log(
          "🚀 ~ file: QuestionPreview.jsx ~ line 39 ~ .then ~ response",
          response
        );
        setAuthor(response.data);

        currentSolution.comments.forEach((id) => {
          getCommentById(id).then((response) => {
            console.log(
              "🚀 ~ file: Solution.jsx ~ line 72 ~ getCommentById ~ response",
              response
            );
            setComments((prev) => prev.concat(response.data));
          });
        });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: QuestionPreview.jsx ~ line 43 ~ React.useEffect ~ error",
          error
        );
      });
  }, []);

  const handleSubmit = async () => {
    addComment({ solutionId: currentSolution._id, text: commentText })
      .then((response) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 89 ~ addComment ~ response",
          response
        );
        setComments((prev) => prev.concat(response.data.comment));
        setCommentText("");
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 97 ~ handleSubmit ~ error",
          error
        );
      });
  };

  const handleVote = async (type) => {
    voteSolution(currentSolution._id, { type })
      .then((response) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 107 ~ voteSolution ~ response",
          response
        );
        setCurrentSolution(response.data);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 110 ~ voteSolution ~ error",
          error
        );
      });
  };

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
                <ThumbUpIcon />
              </IconButton>
              {currentSolution?.upVotes.length}
              <IconButton aria-label="downVote" onClick={() => handleVote(-1)}>
                <ThumbDownIcon />
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
                  // multiline
                  size="small"
                  variant="outlined"
                  // label="Comment"
                  placeholder="Your Thoughts"
                  sx={{ mr: 0.5 }}
                  fullWidth
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setCommentText("")}
                          size="small"
                          // sx={{ mr: 0.5 }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton
                  onClick={handleSubmit}
                  color="primary"
                  size="medium"
                >
                  <SendIcon />
                </IconButton>
              </CardActions>
            </Grid>
            {comments.map((comment, index) => (
              <Comment parent key={index} comment={comment} />
            ))}
          </Grid>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Solution;
