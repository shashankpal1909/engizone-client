import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Link,
  Grid,
  Fab,
  Container,
  CssBaseline,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import { Link as RouterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="text.secondary">
      {"Copyright © "}
      <Link component={RouterLink} color="inherit" to="/">
        EngiZone
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const pages = ["Home", "Questions", "Resources", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <CssBaseline />
      <Grid
        container
        direction={"row"}
        spacing={{ xs: 2 }}
        justifyContent={"center"}
        // alignItems={"center"}
        // sx={{ p: { xs: "1rem" }, mt: "auto" }}
      >
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                color="secondary"
                // sx={{ maxWidth: "500px" }}
                fontWeight="500"
                align="center"
                gutterBottom
              >
                EngiZone
              </Typography>
              <Container maxWidth="sm">
                <Typography variant="body1">Find best answer for your questions</Typography>
                <Copyright />
              </Container>
              {/* <Typography variant="body1" color="text.secondary" align="center" paragraph>
                EngiZone is a platform where you can post your question and get best answer
                instantly. We want to connect peple who wants to share their knowledge in effective
                way to the people who need it.
              </Typography>
              <Button variant="outlined" color="info">
                See Details
              </Button> */}
            </Grid>
            {/* <Grid item>
            <Typography
            variant="h5"
            color="secondary"
            // sx={{ maxWidth: "500px" }}
            fontWeight="500"
            >
            Quick Links
            </Typography>
            <Typography>Home | Questions | Resources</Typography>
          </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

/* <Box
      position="static"
      bottom={0}
      // width="100vw"
      // bgcolor="#1a2027"
      // sx={{ colorScheme: "dark" }}
      display="flex"
      justifyContent="space-around"
      // sx={{ justifyCenter: "center" }}
    >
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          // textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="25px" fontWeight="bold" fontStyle="italic">
            engiZone
          </Typography>
          <Typography variant="body1" multiline textAlign="justify" color="#b4b4b4">
            Anim enim aliqua dolore elit. Est est est anim nostrud. Labore mollit velit adipisicing
            aute tempor minim qui ea proident nostrud sunt velit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="20px" fontStyle="italic">
            Quick Links
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {pages.map((page) => (
            <Link variant="body1" key="page" href="/" underline="none" color="#b4b4b4">
              {page}
            </Link>
          ))}
        </CardActions>
      </Card>
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="20px" fontStyle="italic">
            Quick Links
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {settings.map((setting) => (
            <Link variant="body1" key={setting} href="/" underline="none" color="#b4b4b4">
              {setting}
            </Link>
          ))}
        </CardActions>
      </Card>
    </Box> */
