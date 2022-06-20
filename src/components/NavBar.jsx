import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
} from "@mui/material";

import UserContext from "../context/user/context";

const NavBar = () => {
  const { user, signOut } = React.useContext(UserContext);
  // console.log("=>(NavBar.jsx:24) user", user);

  const pages = ["Home", "Questions", "Resources", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleNavigationAction = (page) => {
    switch (page) {
      case "Home":
        navigate("/");
        break;
      case "Questions":
        navigate("/questions");
        break;
      case "Resources":
        navigate("/resources");
        break;
      case "Contact Us":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  const handleSettingAction = (setting) => {
    switch (setting) {
      case "Profile":
        navigate("/profile");
        break;
      case "Logout":
        signOut();
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="sticky" color="primary" width={100}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => {
                  handleNavigationAction(page);
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box>
          <Link component={RouterLink} sx={{ textDecoration: "none" }} to="/">
            <Typography variant="h5" color={"white"}>
              EngiZone
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {
                handleNavigationAction(page);
              }}
              sx={{
                color: "inherit",
                display: "block",
                textTransform: "capitalize",
                fontWeight: "medium",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        {user ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ bgcolor: "crimson" }}
                  children={`${user.firstName[0]}`}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleSettingAction(setting);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ color: "white" }}
              component={RouterLink}
              to="/sign-up"
            >
              <LoginIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
