import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@mui/material";

const Footer = () => {
  const pages = ["Home", "Questions", "Resources", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Box
      position="static"
      bottom={0}
      width="100vw"
      bgcolor="#1a2027"
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
          <Typography
            variant="outlined"
            fontSize="25px"
            fontWeight="bold"
            fontStyle="italic"
          >
            engiZone
          </Typography>
          <Typography
            variant="body1"
            multiline
            textAlign="justify"
            color="#b4b4b4"
          >
            Anim enim aliqua dolore elit. Est est est anim nostrud. Labore
            mollit velit adipisicing aute tempor minim qui ea proident nostrud
            sunt velit.
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
            <Link
              variant="body1"
              key="page"
              href="/"
              underline="none"
              color="#b4b4b4"
            >
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
            <Link
              variant="body1"
              key={setting}
              href="/"
              underline="none"
              color="#b4b4b4"
            >
              {setting}
            </Link>
          ))}
        </CardActions>
      </Card>
    </Box>
  );
};

export default Footer;
