import React from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import LockIcon from "@mui/icons-material/Lock";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PeopleIcon from "@mui/icons-material/People";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  Container,
} from "@mui/material";

const DetailsCard = ({ title, description, icon }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 250,
        minHeight: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ maxWidth: "250px" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "1rem",
            pb: "1rem",
          }}
        >
          {icon}
        </Container>
        <Typography variant="h5" component="div" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center" color={"text.secondary"}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const HowItWorks = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        alignContent={"center"}
        container
        direction={"column"}
        justifyContent={"center"}
        spacing={2}
        sx={{ p: "1rem" }}
      >
        <Grid item>
          <Typography variant="h4" align="center" color={"primary"}>
            How it works.
          </Typography>
          <Typography variant="body1" align="center" color={"GrayText"}>
            This is how our platform supports to find you answer.
          </Typography>
        </Grid>
        <Grid item justifyContent={"center"}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item>
              <DetailsCard
                title={"Ask Questions"}
                description={"Ask questions on any topic, get instant answers."}
                icon={
                  <QuestionMarkIcon
                    color={"primary"}
                    sx={{ width: "100px", height: "100px" }}
                  />
                }
              />
            </Grid>
            <Grid item>
              <DetailsCard
                title={"Get Answers"}
                description={
                  "Get relevent answers to your question in real-time."
                }
                icon={
                  <QuestionAnswerIcon
                    color={"secondary"}
                    sx={{ width: "100px", height: "100px" }}
                  />
                }
              />
            </Grid>
            <Grid item>
              <DetailsCard
                title={"Join Community"}
                description={"Connect with people to share your knowledge."}
                icon={
                  <PeopleIcon
                    color={"error"}
                    sx={{ width: "100px", height: "100px" }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
