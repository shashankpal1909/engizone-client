import React from "react";

import { Typography, Grid, Card, CardContent, CssBaseline, Container } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import LockIcon from "@mui/icons-material/Lock";

function DetailsCard({ title, description, icon }) {
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
      <CardContent sx={{ maxWidth: "225px" }}>
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
}

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
            This is how our product works
          </Typography>
        </Grid>
        <Grid item justifyContent={"center"}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item>
              <DetailsCard
                title={"Find Home"}
                description={
                  "Our properties are located at prime areas where by there won’t be problem with transportation "
                }
                icon={<LocationOnIcon color={"primary"} sx={{ width: "100px", height: "100px" }} />}
              />
            </Grid>
            <Grid item>
              <DetailsCard
                title={"Make Payments"}
                description={
                  "Our estates comes with good network, portable water, 24hrs light and round the clock security."
                }
                icon={<PaymentsIcon color={"secondary"} sx={{ width: "100px", height: "100px" }} />}
              />
            </Grid>
            <Grid item>
              <DetailsCard
                title={"Make it Official"}
                description={
                  "We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. "
                }
                icon={<LockIcon color={"error"} sx={{ width: "100px", height: "100px" }} />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowItWorks;
