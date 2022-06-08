import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Comment = (props) => {
  // Comment = () => {
  //   if (props.parent) return <Comment />;
  //   return null;
  // };
  return (
    <Grid item container justifyContent="flex-end" spacing={1}>
      <Grid item xs={1}>
        <CardActions>
          <Avatar sx={{ bgcolor: red[500] }} />
        </CardActions>
      </Grid>
      <Grid item xs={11}>
        <Card variant="outlined">
          <CardContent sx={{ padding: 1 }}>
            <Grid container justifyContent="space-between">
              <Grid
                item
                display="flex"
                sx={{ alignItems: "flex-end", justifyContent: "space-between" }}
              >
                <Typography fontWeight="bold" componant="span" mr={1}>
                  Username
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  componant="span"
                >
                  {"5 min "} ago
                </Typography>
              </Grid>
              <Grid item>
                <IconButton sx={{ padding: 0 }}>
                  <MoreVertIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" align="justify">
                  Sint proident enim pariatur pariatur in minim ea magna do.
                  Voluptate deserunt anim magna ullamco sunt. Ullamco aute sunt
                  veniam quis commodo aliqua adipisicing est anim nostrud
                  consequat cupidatat aliquip incididunt. Labore mollit nisi
                  enim adipisicing occaecat commodo voluptate ea non Lorem
                  dolore.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={11} container>
        {props.parent && <Comment />}
      </Grid>
    </Grid>
  );
};

export default Comment;
