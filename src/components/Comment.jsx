import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getUserById } from "../api";
import moment from "moment";
import parse from "html-react-parser";

const Comment = ({ parent, comment }) => {
  const [author, setAuthor] = React.useState({});

  React.useEffect(() => {
    getUserById(comment.author)
      .then((response) => {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 24 ~ .then ~ response",
          response
        );
        setAuthor(response.data);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 28 ~ React.useEffect ~ error",
          error
        );
      });
  }, []);

  return (
    <Grid item container justifyContent="flex-end">
      <Grid item width="56px">
        <CardActions>
          <Avatar sx={{ bgcolor: red[500] }} />
        </CardActions>
      </Grid>
      <Grid item xs container spacing={1}>
        <Grid item>
          <Card variant="outlined">
            <CardContent
              sx={{
                padding: 1,
                "&:last-child": {
                  paddingBottom: 1,
                },
              }}
            >
              <Grid container p={0.5} pt={0} justifyContent="space-between">
                <Grid
                  item
                  display="flex"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontWeight="bold" component="span" mr={1}>
                    {`${author?.firstName} ${author?.lastName}`}
                  </Typography>
                  <Typography
                    variant="caption"
                    // fontWeight="bold"
                    component="span"
                  >
                    {moment(comment?.createdAt).fromNow()}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    size="small"
                    // sx={{ padding: 0 }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
                <Grid item>{parse(comment?.text)}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          {parent && <Comment comment={comment} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
