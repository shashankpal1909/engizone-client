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

const Solution = () => {
  const [comments, setComments] = React.useState(false);

  const handleComments = () => {
    setComments(!comments);
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
          title="Username"
          subheader="Sep 14, 2016"
        />
        <CardMedia component="img" image={HeaderImage} />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            Ex sit culpa dolor ut. Est reprehenderit duis minim elit. Velit
            culpa qui reprehenderit occaecat ipsum eu eiusmod quis dolore tempor
            elit qui quis laborum.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container justifyContent="space-between">
            <Grid item>
              <IconButton aria-label="upVote">
                <ThumbUpIcon />
              </IconButton>
              {3} Votes
              <IconButton aria-label="downVote">
                <ThumbDownIcon />
              </IconButton>
            </Grid>
            <Grid item>
              {2} Comments
              <CommentSection
                expand={comments}
                onClick={handleComments}
                aria-expanded={comments}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </CommentSection>
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={comments} timeout="auto" unmountOnExit>
          <Divider />
          <Typography
            variant="h6"
            fontWeight="bold"
            disableGutters
            pl={2}
            pr={2}
          >
            Comments
          </Typography>
          <Grid container direction="column" padding={1} spacing={1}>
            <Grid item>
              <CardActions>
                <Avatar sx={{ bgcolor: red[500] }} />
                <TextField
                  multiline
                  size="medium"
                  variant="outlined"
                  label="Comment"
                  placeholder="Your Thoughts"
                  sx={{ width: "100%", mr: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
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
                  color="primary"
                  size="large"
                  // aria-label="add to shopping cart"
                >
                  <SendIcon />
                </IconButton>
                {/* <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  color="primary"
                >
                  Post
                </Button> */}
                {/* <Button variant="outlined" color="primary">
                  Cancel
                </Button> */}
              </CardActions>
            </Grid>
            <Comment parent />
            <Comment parent />
          </Grid>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Solution;
