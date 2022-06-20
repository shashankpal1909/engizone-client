import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Skeleton,
  Divider,
} from "@mui/material";

const QuestionSkeleton = () => {
  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          sx={{ pb: 1 }}
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          action={null}
          title={
            <Skeleton animation="wave" height={15} width="30%" sx={{ mb: 1 }} />
          }
          subheader={<Skeleton animation="wave" height={10} width="20%" />}
        />
        <Divider />

        <CardActionArea>
          <CardContent sx={{ pt: 1, pb: 1 }}>
            <Typography variant="body1" gutterBottom>
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="body2" color="text.primary">
              <React.Fragment>
                {Array(3)
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
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ p: "1rem" }}>
          <Grid
            spacing={1}
            container
            alignItems={"center"}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Grid item display="flex">
              <React.Fragment>
                {Array(3)
                  .fill()
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      width={70}
                      height={30}
                      sx={{ mr: 1, borderRadius: 2 }}
                    />
                  ))}
              </React.Fragment>
            </Grid>
            <Grid item display="flex">
              <React.Fragment>
                {Array(3)
                  .fill()
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      width={70}
                      height={30}
                      sx={{ mr: 1, borderRadius: 2 }}
                    />
                  ))}
              </React.Fragment>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default QuestionSkeleton;
